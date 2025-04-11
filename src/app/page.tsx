import { osintCategories } from "@/data/osint-resources";
import ResourcesLayout from "@/components/ResourcesLayout";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">AstraCodeX</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Open Source Intelligence resources
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-9 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                id="header-search"
                name="header-search"
              />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <ResourcesLayout
        categories={osintCategories}
        headerSearchInputId="header-search"
      />
    </main>
  );
}
