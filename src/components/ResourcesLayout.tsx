"use client";

import { useState, useEffect, useMemo } from "react";
import type { Category, Subfolder, Resource } from "@/data/osint-resources";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ChevronDown, Menu, ExternalLink, Search, Folder, FileText } from "lucide-react";

interface ResourcesLayoutProps {
  categories: Category[];
  headerSearchInputId?: string;
}

export default function ResourcesLayout({ categories, headerSearchInputId }: ResourcesLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(categories[0] || null);
  const [selectedSubfolder, setSelectedSubfolder] = useState<Subfolder | null>(
    selectedCategory?.subfolders[0] || null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFolders, setExpandedFolders] = useState<string[]>([
    selectedCategory?.id || "",
  ]);

  // Effect to sync header search input with internal search state
  useEffect(() => {
    if (headerSearchInputId) {
      const headerSearchInput = document.getElementById(headerSearchInputId) as HTMLInputElement;
      if (headerSearchInput) {
        // Set initial value
        headerSearchInput.value = searchQuery;

        // Listen for changes
        const handleHeaderSearch = (e: Event) => {
          const input = e.target as HTMLInputElement;
          setSearchQuery(input.value);
        };

        headerSearchInput.addEventListener("input", handleHeaderSearch);

        return () => {
          headerSearchInput.removeEventListener("input", handleHeaderSearch);
        };
      }
    }
  }, [headerSearchInputId, searchQuery]);

  // Function to toggle expanded state of a folder
  const toggleFolder = (categoryId: string) => {
    setExpandedFolders((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Function to select a category and its first subfolder
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);

    // Close other categories when selecting a new one
    if (expandedFolders.length > 0) {
      // If the category is not already expanded, close all others and expand this one
      if (!expandedFolders.includes(category.id)) {
        setExpandedFolders([category.id]);
      }
    } else {
      // If no folders are expanded, expand this one
      setExpandedFolders([category.id]);
    }

    // Only select the first subfolder if no subfolder from this category is selected
    if (!selectedSubfolder || !category.subfolders.find(sf => sf.id === selectedSubfolder.id)) {
      setSelectedSubfolder(category.subfolders[0] || null);
    }
  };

  // Function to select a subfolder
  const handleSubfolderClick = (subfolder: Subfolder) => {
    setSelectedSubfolder(subfolder);
  };

  // Filter resources based on search query
  const filteredResources = useMemo(() => {
    if (!searchQuery.trim()) {
      return selectedSubfolder?.resources || [];
    }

    const query = searchQuery.toLowerCase();

    if (!selectedSubfolder) return [];

    return selectedSubfolder.resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.url.toLowerCase().includes(query)
    );
  }, [searchQuery, selectedSubfolder]);

  // Search across all categories and subfolders
  const globalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;

    const query = searchQuery.toLowerCase();
    const results: Array<{ category: Category; subfolder: Subfolder; resource: Resource }> = [];

    for (const category of categories) {
      for (const subfolder of category.subfolders) {
        for (const resource of subfolder.resources) {
          if (
            resource.title.toLowerCase().includes(query) ||
            resource.description.toLowerCase().includes(query) ||
            resource.url.toLowerCase().includes(query)
          ) {
            results.push({ category, subfolder, resource });
          }
        }
      }
    }

    return results;
  }, [searchQuery, categories]);

  return (
    <div className="container mx-auto flex h-full min-h-[calc(100vh-120px)] flex-col px-4 py-6 md:flex-row md:gap-6">
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="mb-4 flex md:hidden">
            <Menu className="mr-2 h-4 w-4" />
            OSINT Resources
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] bg-white dark:bg-zinc-900">
          <div className="max-h-[calc(100vh-60px)] overflow-y-auto pt-6 pr-2 scrollbar-thin">
            <MobileCategoryNav
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubfolder={selectedSubfolder}
              onCategoryClick={handleCategoryClick}
              onSubfolderClick={handleSubfolderClick}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
            />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-1/4 lg:w-1/5">
        <div className="sticky top-24 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white">OSINT Resources</h2>
          <div className="max-h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin">
            <Accordion
              type="multiple"
              defaultValue={expandedFolders}
              value={expandedFolders}
              onValueChange={setExpandedFolders}
            >
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  selectedSubfolder={selectedSubfolder}
                  onCategoryClick={handleCategoryClick}
                  onSubfolderClick={handleSubfolderClick}
                  isExpanded={expandedFolders.includes(category.id)}
                  toggleFolder={() => toggleFolder(category.id)}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:w-3/4 lg:w-4/5">
        {/* Show search input only if not using header search */}
        {!headerSearchInputId && (
          <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div>
              {selectedCategory && selectedSubfolder ? (
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{selectedCategory.name}</h2>
                  <span className="mx-2 text-zinc-500 dark:text-zinc-400">/</span>
                  <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">{selectedSubfolder.name}</h3>
                </div>
              ) : (
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">All Resources</h2>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <ThemeToggle />
            </div>
          </div>
        )}

        {/* Category/Subfolder path if using header search */}
        {headerSearchInputId && selectedCategory && selectedSubfolder && (
          <div className="mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{selectedCategory.name}</h2>
              <span className="mx-2 text-zinc-500 dark:text-zinc-400">/</span>
              <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">{selectedSubfolder.name}</h3>
            </div>
          </div>
        )}

        {/* Search Results or Current Subfolder Resources */}
        {searchQuery.trim() && globalSearchResults && globalSearchResults.length > 0 ? (
          <div>
            <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-white">Search Results for "{searchQuery}"</h3>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {globalSearchResults.map(({ category, subfolder, resource }) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  categoryName={category.name}
                  subfolderName={subfolder.name}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSubfolder(subfolder);
                    // Make sure the category is expanded
                    if (!expandedFolders.includes(category.id)) {
                      setExpandedFolders([category.id]);
                    }
                    // Clear search after navigating
                    setSearchQuery("");
                    if (headerSearchInputId) {
                      const headerSearchInput = document.getElementById(headerSearchInputId) as HTMLInputElement;
                      if (headerSearchInput) {
                        headerSearchInput.value = "";
                      }
                    }
                  }}
                />
              ))}
            </div>
          </div>
        ) : selectedCategory && selectedSubfolder ? (
          <div>
            {filteredResources.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : searchQuery ? (
              <div className="flex h-64 items-center justify-center rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-center text-zinc-600 dark:text-zinc-400">
                  No results found for "{searchQuery}" in this folder
                </p>
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-center text-zinc-600 dark:text-zinc-400">
                  No resources in this folder
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Select a category and subfolder to view resources
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Component for Category in Accordion
function CategoryItem({
  category,
  selectedSubfolder,
  onCategoryClick,
  onSubfolderClick,
  isExpanded,
  toggleFolder,
}: {
  category: Category;
  selectedSubfolder: Subfolder | null;
  onCategoryClick: (category: Category) => void;
  onSubfolderClick: (subfolder: Subfolder) => void;
  isExpanded: boolean;
  toggleFolder: () => void;
}) {
  return (
    <AccordionItem value={category.id} className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center">
        <button
          onClick={() => onCategoryClick(category)}
          className="flex-1 py-3 text-left font-medium text-zinc-900 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
        >
          <div className="flex items-center">
            <Folder className="mr-2 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            {category.name}
          </div>
        </button>
        <AccordionTrigger
          onClick={(e) => {
            e.stopPropagation();
            toggleFolder();
          }}
          className="h-10 w-10 text-zinc-500 hover:text-zinc-700 hover:no-underline dark:text-zinc-400 dark:hover:text-zinc-300"
        />
      </div>
      <AccordionContent>
        <ul className="space-y-1 py-1">
          {category.subfolders.map((subfolder) => (
            <li key={subfolder.id}>
              <button
                onClick={() => onSubfolderClick(subfolder)}
                className={`w-full rounded-md px-3 py-2 text-left text-sm ${
                  selectedSubfolder?.id === subfolder.id
                    ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100"
                }`}
              >
                <div className="flex items-center">
                  <FileText className="mr-2 h-3 w-3 text-zinc-500 dark:text-zinc-400" />
                  {subfolder.name}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

// Mobile Navigation Component
function MobileCategoryNav({
  categories,
  selectedCategory,
  selectedSubfolder,
  onCategoryClick,
  onSubfolderClick,
  expandedFolders,
  toggleFolder,
}: {
  categories: Category[];
  selectedCategory: Category | null;
  selectedSubfolder: Subfolder | null;
  onCategoryClick: (category: Category) => void;
  onSubfolderClick: (subfolder: Subfolder) => void;
  expandedFolders: string[];
  toggleFolder: (categoryId: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h3 className="mb-2 font-medium dark:text-white">OSINT Resources</h3>
      {categories.map((category) => (
        <div key={category.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <button
              className={`flex items-center text-left ${
                selectedCategory?.id === category.id
                  ? "font-medium text-zinc-900 dark:text-white"
                  : "text-zinc-700 dark:text-zinc-300"
              }`}
              onClick={() => onCategoryClick(category)}
            >
              <Folder className="mr-2 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              {category.name}
            </button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => toggleFolder(category.id)}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  expandedFolders.includes(category.id) ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>

          {expandedFolders.includes(category.id) && (
            <ul className="ml-6 space-y-1 border-l border-zinc-200 pl-2 dark:border-zinc-800">
              {category.subfolders.map((subfolder) => (
                <li key={subfolder.id}>
                  <button
                    onClick={() => {
                      onCategoryClick(category);
                      onSubfolderClick(subfolder);
                    }}
                    className={`flex w-full items-center rounded-md px-2 py-1 text-left text-sm ${
                      selectedSubfolder?.id === subfolder.id
                        ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100"
                    }`}
                  >
                    <FileText className="mr-2 h-3 w-3 text-zinc-500 dark:text-zinc-400" />
                    {subfolder.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// Resource Card Component
interface ResourceCardProps {
  resource: Resource;
  categoryName?: string;
  subfolderName?: string;
  onClick?: () => void;
}

function ResourceCard({ resource, categoryName, subfolderName, onClick }: ResourceCardProps) {
  return (
    <Card className="overflow-hidden border-zinc-200 bg-white transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{resource.title}</CardTitle>
        <CardDescription className="truncate text-zinc-500 dark:text-zinc-400">
          {resource.url}
        </CardDescription>
        {categoryName && subfolderName && (
          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            <button
              onClick={onClick}
              className="hover:text-zinc-900 hover:underline dark:hover:text-zinc-300"
            >
              {categoryName} / {subfolderName}
            </button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-zinc-700 dark:text-zinc-300">{resource.description}</p>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
        >
          Visit Resource
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </CardContent>
    </Card>
  );
}
