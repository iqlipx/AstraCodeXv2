export interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
}

export interface Subfolder {
  id: string;
  name: string;
  resources: Resource[];
}

export interface Category {
  id: string;
  name: string;
  subfolders: Subfolder[];
}


export const osintCategories: Category[] = [
  {
    id: "search-engines",
    name: "Search Engines",
    subfolders: [
      {
        id: "general-search",
        name: "General Search",
        resources: [
          
              {
                id: "udm14",
                title: "UDM14",
                url: "https://udm14.com/",
                description: 'Appends "udm=14" to Google Search URLs for AI-free, ad-free results.'
              },
              {
                id: "searxng",
                title: "SearXNG",
                url: "https://searx.bndkt.io/",
                description: "Open-source, privacy-respecting metasearch engine that aggregates results."
              },
              {
                id: "bing",
                title: "Bing",
                url: "https://www.bing.com/",
                description: "Microsoft's search engine for web, image, and video results."
              },
              {
                id: "yahoo",
                title: "Yahoo",
                url: "https://www.yahoo.com/",
                description: "Web search engine and news aggregator powered by Bing."
              },
              {
                id: "duckduckgo",
                title: "DuckDuckGo",
                url: "https://duckduckgo.com/",
                description: "Privacy-focused search engine that doesn't track users."
              },
              {
                id: "brave",
                title: "Brave Search",
                url: "https://search.brave.com/",
                description: "Privacy-first search engine built into the Brave browser."
              },
              {
                id: "yandex",
                title: "Yandex",
                url: "https://yandex.com/",
                description: "Russia’s leading search engine with AI-powered results."
              },
              {
                id: "wayback",
                title: "Wayback Machine",
                url: "https://web.archive.org/",
                description: "Digital web archive to view historical versions of websites."
              },
              {
                id: "baidu",
                title: "Baidu",
                url: "https://www.baidu.com/",
                description: "China’s top search engine with web and AI-driven features."
              },
              {
                id: "ecosia",
                title: "Ecosia",
                url: "https://www.ecosia.org/",
                description: "Eco-friendly search engine that plants trees using ad revenue."
              },
              {
                id: "startpage",
                title: "Startpage",
                url: "https://www.startpage.com/",
                description: "Privacy-focused search engine delivering Google results without tracking."
              },
              {
                id: "13tabs",
                title: "13Tabs",
                url: "https://www.13tabs.com/",
                description: "Indian search engine focused on privacy and unbiased results."
              },
              {
                id: "qmamu",
                title: "Qmamu",
                url: "https://qmamu.com/",
                description: "Indian-made search engine offering web, news, and AI-powered searches."
              }
        ]
      },
      {
        id: "face-search",
        name: "Face Search",
        resources: [
          {
            id: "facecheck",
            title: "FaceCheck.ID",
            url: "https://facecheck.id/",
            description: "Facial recognition search engine for identifying people from photos."
          },
          {
            id: "tineye",
            title: "TinEye",
            url: "https://tineye.com/",
            description: "Reverse image search engine to find image sources and track usage."
          },
          {
            id: "copyseeker",
            title: "Copyseeker",
            url: "https://copyseeker.net/",
            description: "Tool to detect AI-generated and plagiarized content."
          },
          {
            id: "lensoai",
            title: "Lenso AI",
            url: "https://lenso.ai/en",
            description: "AI-powered tool for reverse image search and visual content analysis."
          }
        ]
      },
      {
        id: "image-search",
        name: "Image Search",
        resources: [
          {
            id: "google-images",
            title: "Google Images",
            url: "https://images.google.com",
            description: "Google's image search engine with reverse image search."
          },
          {
            id: "tineye",
            title: "TinEye",
            url: "https://tineye.com",
            description: "Reverse image search engine specialized in finding exact matches."
          },
          {
            id: "yandex-images",
            title: "Yandex Images",
            url: "https://yandex.com/images",
            description: "Powerful reverse image search from Russian search engine Yandex."
          }
        ]
      }
    ]
  },
  {
    id: "social-media-tools",
    name: "Social Media Tools",
    subfolders: [
      {
        id: "twitter-tools",
        name: "Twitter Tools",
        resources: [
          {
            id: "tweetdeck",
            title: "TweetDeck",
            url: "https://tweetdeck.twitter.com",
            description: "Dashboard for managing Twitter accounts and monitoring content."
          },
          {
            id: "trendsmap",
            title: "Trendsmap",
            url: "https://trendsmap.com",
            description: "Real-time local Twitter trends visualization on a map."
          },
          {
            id: "twitonomy",
            title: "Twitonomy",
            url: "https://twitonomy.com",
            description: "Twitter analytics tool providing insights on accounts and tweets."
          }
        ]
      },
      {
        id: "facebook-tools",
        name: "Facebook Tools",
        resources: [
          {
            id: "fb-graph-search",
            title: "Facebook Graph Search",
            url: "https://inteltechniques.com/osint/facebook.html",
            description: "Custom Facebook search queries through Graph API."
          },
          {
            id: "whopostedwhat",
            title: "Who Posted What",
            url: "https://whopostedwhat.com",
            description: "Facebook post search engine by date and keyword."
          }
        ]
      },
      {
        id: "instagram-tools",
        name: "Instagram Tools",
        resources: [
          {
            id: "instaloader",
            title: "Instaloader",
            url: "https://instaloader.github.io",
            description: "Tool to download Instagram profiles, posts, hashtags, stories."
          },
          {
            id: "osintgram",
            title: "Osintgram",
            url: "https://github.com/Datalux/Osintgram",
            description: "OSINT tool on Instagram to collect data from public profiles."
          }
        ]
      }
    ]
  },
  {
    id: "geolocation-tools",
    name: "Geolocation Tools",
    subfolders: [
      {
        id: "maps",
        name: "Maps",
        resources: [
          {
            id: "google-maps",
            title: "Google Maps",
            url: "https://maps.google.com",
            description: "Comprehensive mapping service with satellite imagery and street view."
          },
          {
            id: "openstreetmap",
            title: "OpenStreetMap",
            url: "https://www.openstreetmap.org",
            description: "Collaborative, editable world map created by contributors."
          },
          {
            id: "wikimapia",
            title: "Wikimapia",
            url: "http://wikimapia.org",
            description: "Collaborative mapping project combining Google Maps with wiki system."
          }
        ]
      },
      {
        id: "satellite-imagery",
        name: "Satellite Imagery",
        resources: [
          {
            id: "sentinel-hub",
            title: "Sentinel Hub",
            url: "https://www.sentinel-hub.com",
            description: "Access to satellite imagery from multiple sources."
          },
          {
            id: "earthexplorer",
            title: "USGS Earth Explorer",
            url: "https://earthexplorer.usgs.gov",
            description: "Access to satellite imagery from the U.S. Geological Survey."
          },
          {
            id: "nasa-worldview",
            title: "NASA Worldview",
            url: "https://worldview.earthdata.nasa.gov",
            description: "Browse and download NASA satellite imagery."
          }
        ]
      }
    ]
  },
  {
    id: "domain-ip-tools",
    name: "Domain & IP Tools",
    subfolders: [
      {
        id: "whois-lookups",
        name: "WHOIS Lookups",
        resources: [
          {
            id: "whois",
            title: "WHOIS",
            url: "https://whois.domaintools.com",
            description: "Domain name WHOIS lookup for registration information."
          },
          {
            id: "whoxy",
            title: "Whoxy",
            url: "https://www.whoxy.com",
            description: "WHOIS history and domain research platform."
          }
        ]
      },
      {
        id: "dns-tools",
        name: "DNS Tools",
        resources: [
          {
            id: "securitytrails",
            title: "SecurityTrails",
            url: "https://securitytrails.com",
            description: "DNS historical data and domain intelligence."
          },
          {
            id: "dnsdumpster",
            title: "DNSdumpster",
            url: "https://dnsdumpster.com",
            description: "DNS reconnaissance tool for discovering hosts."
          },
          {
            id: "viewdns",
            title: "ViewDNS.info",
            url: "https://viewdns.info",
            description: "Comprehensive domain research tools."
          }
        ]
      },
      {
        id: "ip-lookup",
        name: "IP Lookup",
        resources: [
          {
            id: "ipinfo",
            title: "IPinfo",
            url: "https://ipinfo.io",
            description: "Accurate IP address location and data."
          },
          {
            id: "shodan",
            title: "Shodan",
            url: "https://www.shodan.io",
            description: "Search engine for internet-connected devices."
          },
          {
            id: "censys",
            title: "Censys",
            url: "https://censys.io",
            description: "Search engine for finding internet devices and networks."
          }
        ]
      }
    ]
  },
  // New categories start here
  {
    id: "darkweb-tools",
    name: "Dark Web Tools",
    subfolders: [
      {
        id: "tor-resources",
        name: "Tor Resources",
        resources: [
          {
            id: "tor-project",
            title: "Tor Project",
            url: "https://www.torproject.org",
            description: "Official Tor browser and documentation for anonymous browsing."
          },
          {
            id: "tails",
            title: "Tails OS",
            url: "https://tails.boum.org",
            description: "Live operating system for privacy and anonymity, recommended for dark web investigations."
          },
          {
            id: "onion-search",
            title: "Ahmia.fi",
            url: "https://ahmia.fi",
            description: "Search engine for Tor hidden services that can be accessed through regular browsers."
          }
        ]
      },
      {
        id: "darkweb-monitoring",
        name: "Dark Web Monitoring",
        resources: [
          {
            id: "torch",
            title: "Torch",
            url: "http://xmh57jrzrnw6insl.onion", // Note: .onion links require Tor browser to access
            description: "One of the oldest dark web search engines (requires Tor browser)."
          },
          {
            id: "hunchly",
            title: "Hunchly",
            url: "https://www.hunch.ly",
            description: "Dark web monitoring and capture tool for OSINT researchers."
          },
          {
            id: "darkwebid",
            title: "DarkWebID",
            url: "https://www.darkwebid.com",
            description: "Dark web threat intelligence and monitoring service."
          }
        ]
      }
    ]
  },
  {
    id: "data-leaks",
    name: "Data Leaks & Breaches",
    subfolders: [
      {
        id: "breach-databases",
        name: "Breach Databases",
        resources: [
          {
            id: "haveibeenpwned",
            title: "Have I Been Pwned",
            url: "https://haveibeenpwned.com",
            description: "Check if email addresses or phone numbers have been compromised in data breaches."
          },
          {
            id: "dehashed",
            title: "DeHashed",
            url: "https://dehashed.com",
            description: "Search engine for data breaches and leaked credentials (paid service)."
          },
          {
            id: "scylla",
            title: "Scylla.sh",
            url: "https://scylla.sh",
            description: "Database of breached credentials and personal information (requires registration)."
          }
        ]
      },
      {
        id: "leak-monitoring",
        name: "Leak Monitoring",
        resources: [
          {
            id: "vigilante",
            title: "Vigilante.pw",
            url: "https://vigilante.pw",
            description: "Database breach index with information on data breaches."
          },
          {
            id: "leakix",
            title: "LeakIX",
            url: "https://leakix.net",
            description: "Search engine indexing publicly exposed information."
          },
          {
            id: "ghostproject",
            title: "GhostProject",
            url: "https://ghostproject.fr",
            description: "Search for compromised email accounts and passwords."
          }
        ]
      }
    ]
  },
  {
    id: "public-records",
    name: "Public Records",
    subfolders: [
      {
        id: "business-records",
        name: "Business Records",
        resources: [
          {
            id: "opencorporates",
            title: "OpenCorporates",
            url: "https://opencorporates.com",
            description: "Largest open database of companies and corporate data worldwide."
          },
          {
            id: "edgar",
            title: "SEC EDGAR",
            url: "https://www.sec.gov/edgar.shtml",
            description: "U.S. Securities and Exchange Commission database for public company filings."
          },
          {
            id: "companyhouse",
            title: "Companies House",
            url: "https://find-and-update.company-information.service.gov.uk",
            description: "UK's registrar of companies with free company information."
          }
        ]
      },
      {
        id: "property-records",
        name: "Property Records",
        resources: [
          {
            id: "zillow",
            title: "Zillow",
            url: "https://www.zillow.com",
            description: "Property database with home values, sales records, and ownership information."
          },
          {
            id: "propertyshark",
            title: "PropertyShark",
            url: "https://www.propertyshark.com",
            description: "Real estate database with property values, ownership, and records."
          },
          {
            id: "county-assessors",
            title: "NETR Online",
            url: "https://publicrecords.netronline.com",
            description: "Directory of county tax assessors, links to county property records."
          }
        ]
      },
      {
        id: "court-records",
        name: "Court Records",
        resources: [
          {
            id: "pacer",
            title: "PACER",
            url: "https://pacer.uscourts.gov",
            description: "Public Access to Court Electronic Records for U.S. federal court documents."
          },
          {
            id: "justia",
            title: "Justia Dockets",
            url: "https://dockets.justia.com",
            description: "Free access to federal court dockets and filings."
          },
          {
            id: "unicourt",
            title: "UniCourt",
            url: "https://unicourt.com",
            description: "Access to state and federal court records (paid service)."
          }
        ]
      }
    ]
  },
  {
    id: "cryptocurrency-tools",
    name: "Cryptocurrency Analysis",
    subfolders: [
      {
        id: "blockchain-explorers",
        name: "Blockchain Explorers",
        resources: [
          {
            id: "blockchair",
            title: "Blockchair",
            url: "https://blockchair.com",
            description: "Multi-blockchain search engine and analytics platform for Bitcoin, Ethereum, and more."
          },
          {
            id: "etherscan",
            title: "Etherscan",
            url: "https://etherscan.io",
            description: "Ethereum blockchain explorer, search, API, and analytics platform."
          },
          {
            id: "tokenview",
            title: "Tokenview",
            url: "https://tokenview.com",
            description: "Multi-cryptocurrency block explorer with address monitoring features."
          }
        ]
      },
      {
        id: "transaction-analysis",
        name: "Transaction Analysis",
        resources: [
          {
            id: "chainalysis",
            title: "Chainalysis",
            url: "https://www.chainalysis.com",
            description: "Blockchain analysis company providing software for cryptocurrency compliance and investigation."
          },
          {
            id: "crystalblockchain",
            title: "Crystal Blockchain",
            url: "https://crystalblockchain.com",
            description: "Blockchain analytics platform for cryptocurrency AML compliance."
          },
          {
            id: "oxt",
            title: "OXT",
            url: "https://oxt.me",
            description: "Bitcoin blockchain explorer and research platform for chain analysis."
          }
        ]
      }
    ]
  },
  {
    id: "people-search",
    name: "People Search",
    subfolders: [
      {
        id: "people-search-engines",
        name: "People Search Engines",
        resources: [
          {
            id: "whitepages",
            title: "Whitepages",
            url: "https://www.whitepages.com",
            description: "Directory of contact information for people and businesses."
          },
          {
            id: "truepeoplesearch",
            title: "TruePeopleSearch",
            url: "https://www.truepeoplesearch.com",
            description: "Free people search tool for finding contact information and addresses."
          },
          {
            id: "spokeo",
            title: "Spokeo",
            url: "https://www.spokeo.com",
            description: "People search engine for finding contact information, social profiles, and more."
          }
        ]
      },
      {
        id: "background-checks",
        name: "Background Checks",
        resources: [
          {
            id: "beenverified",
            title: "BeenVerified",
            url: "https://www.beenverified.com",
            description: "Background check service for people search, contact info, and criminal records."
          },
          {
            id: "intelius",
            title: "Intelius",
            url: "https://www.intelius.com",
            description: "Background check service for people search and public records."
          },
          {
            id: "truthfinder",
            title: "TruthFinder",
            url: "https://www.truthfinder.com",
            description: "Background check service for public records and criminal history."
          }
        ]
      },
      {
        id: "social-analysis",
        name: "Social Media Analysis",
        resources: [
          {
            id: "socialbearing",
            title: "Social Bearing",
            url: "https://socialbearing.com",
            description: "Twitter analytics, insights, and searches for finding people and monitoring profiles."
          },
          {
            id: "followerwonk",
            title: "Followerwonk",
            url: "https://followerwonk.com",
            description: "Twitter analytics tool for searching bios, comparing users, and tracking followers."
          },
          {
            id: "socialmention",
            title: "Social Mention",
            url: "http://socialmention.com",
            description: "Social media search engine that monitors user mentions across platforms."
          }
        ]
      }
    ]
  },
  {
    id: "document-analysis",
    name: "Document Analysis",
    subfolders: [
      {
        id: "metadata-tools",
        name: "Metadata Tools",
        resources: [
          {
            id: "exiftool",
            title: "ExifTool",
            url: "https://exiftool.org",
            description: "Tool for reading, writing, and manipulating metadata in files."
          },
          {
            id: "metadata2go",
            title: "Metadata2Go",
            url: "https://www.metadata2go.com",
            description: "Online metadata viewer and editor for various file formats."
          },
          {
            id: "metagoofil",
            title: "Metagoofil",
            url: "https://tools.kali.org/information-gathering/metagoofil",
            description: "Tool for extracting metadata from public documents on target websites."
          }
        ]
      },
      {
        id: "pdf-analysis",
        name: "PDF Analysis",
        resources: [
          {
            id: "pdfexaminer",
            title: "PDF Examiner",
            url: "https://www.pdfexaminer.com",
            description: "Online tool to analyze PDF files for malicious content and hidden information."
          },
          {
            id: "pdfminer",
            title: "PDFMiner",
            url: "https://github.com/pdfminer/pdfminer.six",
            description: "Python tool to extract information from PDF documents."
          },
          {
            id: "xpdf",
            title: "Xpdf Tools",
            url: "https://www.xpdfreader.com/tools.html",
            description: "Open-source tools for PDF document examination and extraction."
          }
        ]
      }
    ]
  },
  {
    id: "threat-intelligence",
    name: "Threat Intelligence",
    subfolders: [
      {
        id: "malware-analysis",
        name: "Malware Analysis",
        resources: [
          {
            id: "virustotal",
            title: "VirusTotal",
            url: "https://www.virustotal.com",
            description: "Website for analyzing suspicious files, URLs, domains, and IP addresses."
          },
          {
            id: "hybrid-analysis",
            title: "Hybrid Analysis",
            url: "https://www.hybrid-analysis.com",
            description: "Free malware analysis service with sandbox capabilities."
          },
          {
            id: "urlscan",
            title: "URLScan.io",
            url: "https://urlscan.io",
            description: "Website scanning service for analyzing suspicious and malicious URLs."
          }
        ]
      },
      {
        id: "threat-feeds",
        name: "Threat Feeds",
        resources: [
          {
            id: "otx",
            title: "AlienVault OTX",
            url: "https://otx.alienvault.com",
            description: "Open Threat Exchange platform for sharing threat intelligence."
          },
          {
            id: "threatcrowd",
            title: "ThreatCrowd",
            url: "https://www.threatcrowd.org",
            description: "Search engine for threat intelligence with visualizations."
          },
          {
            id: "misp",
            title: "MISP",
            url: "https://www.misp-project.org",
            description: "Open-source threat intelligence platform for sharing, storing, and correlating IOCs."
          }
        ]
      },
      {
        id: "phishing-analysis",
        name: "Phishing Analysis",
        resources: [
          {
            id: "phishtank",
            title: "PhishTank",
            url: "https://phishtank.org",
            description: "Community-based phishing site verification and reporting service."
          },
          {
            id: "openphish",
            title: "OpenPhish",
            url: "https://openphish.com",
            description: "Phishing intelligence and feed of phishing URLs."
          },
          {
            id: "checkphish",
            title: "CheckPhish",
            url: "https://checkphish.ai",
            description: "AI-powered phishing URL detection and analysis tool."
          }
        ]
      }
    ]
  },
  {
    id: "osint-frameworks",
    name: "OSINT Frameworks",
    subfolders: [
      {
        id: "collection-frameworks",
        name: "Collection Frameworks",
        resources: [
          {
            id: "osintframework",
            title: "OSINT Framework",
            url: "https://osintframework.com",
            description: "Collection of OSINT tools and resources organized by category."
          },
          {
            id: "inteltechniques",
            title: "Michael Bazzell's IntelTechniques",
            url: "https://inteltechniques.com/tools",
            description: "Collection of online search tools from the author of 'Open Source Intelligence Techniques'."
          },
          {
            id: "osint-techniques",
            title: "OSINT Techniques",
            url: "https://www.osinttechniques.com",
            description: "Resources, tools, and techniques for OSINT investigators."
          }
        ]
      },
      {
        id: "automated-tools",
        name: "Automated OSINT Tools",
        resources: [
          {
            id: "maltego",
            title: "Maltego",
            url: "https://www.maltego.com",
            description: "Data mining tool for collecting and linking information for visual link analysis."
          },
          {
            id: "spiderfoot",
            title: "SpiderFoot",
            url: "https://www.spiderfoot.net",
            description: "Open-source intelligence automation tool for collecting and analyzing data."
          },
          {
            id: "recon-ng",
            title: "Recon-ng",
            url: "https://github.com/lanmaster53/recon-ng",
            description: "Full-featured reconnaissance framework with modules for web-based information gathering."
          }
        ]
      },
      {
        id: "osint-education",
        name: "OSINT Education",
        resources: [
          {
            id: "sector035",
            title: "Week in OSINT",
            url: "https://sector035.nl/articles/category:week-in-osint",
            description: "Weekly blog posts covering OSINT techniques, tools, and case studies."
          },
          {
            id: "bellingcat",
            title: "Bellingcat",
            url: "https://www.bellingcat.com",
            description: "Investigative journalism site with OSINT case studies and methodologies."
          },
          {
            id: "sans-osint",
            title: "SANS OSINT Resources",
            url: "https://www.sans.org/blog/?focus-area=open-source-intelligence",
            description: "Training materials and blogs from SANS on OSINT techniques."
          }
        ]
      }
    ]
  }
];
