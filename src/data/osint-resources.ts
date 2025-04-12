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
          },
          {
            "id": "pimeyes",
            "title": "PimEyes",
            "url": "https://pimeyes.com/en",
            "description": "Online face search engine using facial recognition to find images of a person across the internet."
          }
        ]
      }
    ]
  },
  {
    id: "social-media-tools",
    name: "Social Media",
    subfolders: [
      {
        id: "twitter-tools",
        name: "X(Twitter)",
        resources: [
          {
            id: "nitter",
            title: "Nitter",
            url: "https://nitter.net/",
            description: "Privacy-respecting front-end for Twitter that doesn't require JavaScript or an account."
          },
          {
            "id": "getdaytrends",
            "title": "GetDayTrends",
            "url": "https://getdaytrends.com/",
            "description": "Tool to track and view real-time and historical Twitter trending topics by location."
          },
          {
            "id": "instalker",
            "title": "Instalker",
            "url": "https://instalker.org/",
            "description": "Twitter wb viewer and analyzer to explore public profiles, posts, and interactions anonymously."
          },
          {
            id: "heavytweetmap",
            title: "Heavy.AI TweetMap",
            url: "https://www.heavy.ai/demos/tweetmap",
            description: "Real-time map that visualizes geotagged tweets for trend analysis and monitoring."
          },
          {
            id: "onemilliontweetmap",
            title: "One Million Tweet Map",
            url: "https://onemilliontweetmap.com/",
            description: "Live map showing the most recent tweets around the world using geolocation."
          },
          {
            id: "twittervideodownloader",
            title: "Twitter Video Downloader",
            url: "https://twittervideodownloader.com/",
            description: "Tool to download videos from Twitter by pasting the tweet URL."
          },
          {
            id: "birdhunt",
            title: "BirdHunt",
            url: "https://birdhunt.huntintel.io/",
            description: "OSINT tool to search Twitter for images, keywords, and accounts."
          },
          {
            id: "twitterimagesearch",
            title: "Twitter Image Search (Google CSE)",
            url: "https://cse.google.com/cse?cx=006290531980334157382:_ltcjq0robu#gsc.tab=0",
            description: "Google Custom Search Engine to find images posted on Twitter."
          },
          {
            id: "botometer",
            title: "Botometer",
            url: "https://botometer.osome.iu.edu/",
            description: "Tool that checks the activity of a Twitter account and gives it a score for how likely it is to be a bot."
          },
          {
            id: "intelx_twitter",
            title: "IntelX Twitter Tools",
            url: "https://intelx.io/tools?tab=twitter",
            description: "Collection of Twitter OSINT tools from Intelligence X for analysis and discovery."
          },
          {
            id: "exportdata",
            title: "ExportData.io",
            url: "https://www.exportdata.io/",
            description: "Extract and export Twitter data including followers, likes, and more."
          }
        ]
      },
      {
        id: "facebook-tools",
        name: "Facebook",
        resources: [

          {
            "id": "facebookmatrix",
            "title": "Facebook Matrix",
            "url": "https://plessas.net/facebookmatrix",
            "description": "Formulas for Searching Facebook – a tool that helps craft advanced Facebook search queries parameters."
          },
          {
            "id": "instagramexplorer",
            "title": "Instagram Explorer",
            "url": "https://www.osintcombine.com/free-osint-tools/instagram-explorer",
            "description": "A tool that enables searching for Instagram images by date and location, facilitating efficient open-source intelligence gathering."
          },          
          {
            "id": "facebookimagesearch",
            "title": "Facebook Image Search (Google CSE)",
            "url": "https://cse.google.com/cse?cx=013991603413798772546:jyvyp2ppxma#gsc.tab=0",
            "description": "Google Custom Search Engine for finding public Facebook images."
          },
          {
            "id": "facebooksearchcse",
            "title": "Facebook Search (Google CSE)",
            "url": "https://cse.google.com/cse?cx=95ae46262a5f2958e",
            "description": "Google Custom Search Engine to search public Facebook posts and profiles."
          },
          {
            "id": "facebookadslibrary",
            "title": "Facebook Ads Library",
            "url": "https://www.facebook.com/ads/library/",
            "description": "Official tool by Meta to view active advertisements running on Facebook and Instagram."
          }
        ]
      },
      {
        id: "instagram-tools",
        name: "Instagram",
        resources: [
          {
            "id": "imginn",
            "title": "ImgInn",
            "url": "https://imginn.com/",
            "description": "Instagram viewer that allows anonymous browsing of public profiles, stories, and posts."
          },
          {
            "id": "metahashtags",
            "title": "MetaHashtags",
            "url": "https://metahashtags.com/",
            "description": "Tool to generate and analyze trending Instagram hashtags for better reach and engagement."
          },
          {
            "id": "dumpor",
            "title": "Dumpor",
            "url": "https://dumpor.io/",
            "description": "Instagram story viewer and analyzer for exploring profiles without logging in."
          },
          {
            "id": "pixnoy",
            "title": "Pixnoy",
            "url": "https://www.pixnoy.com/",
            "description": "Instagram story and profile viewer for viewing public content anonymously."
          },
          {
            "id": "instahunt",
            "title": "InstaHunt",
            "url": "https://instahunt.huntintel.io/",
            "description": "OSINT tool designed to uncover Instagram account details using various search techniques."
          }
        ]
      },
      {
        id: "linkedin-tools",
        name: "Linkedin",
        resources: [
          {
            "id": "recruitin",
            "title": "Recruitin",
            "url": "https://recruitin.net/",
            "description": "A tool to generate advanced Boolean search queries for LinkedIn, GitHub, and other platforms."
          },
          {
            "id": "linkedinsearchcse",
            "title": "LinkedIn User Search (Google CSE)",
            "url": "https://cse.google.com/cse?cx=daaf18e804f81bed0",
            "description": "Google Custom Search Engine for finding public LinkedIn profiles."
          },
          {
            "id": "intelxlinkedin",
            "title": "LinkedIn OSINT Tools – IntelX",
            "url": "https://intelx.io/tools?tab=linkedin",
            "description": "A collection of LinkedIn search and analysis tools provided by IntelligenceX for OSINT investigations."
          }
        ]
      },
      {
        id: "pinterest",
        name: "Pinterest",
        resources: [
          {
            "id": "pinterest-sitemap",
            "title": "Pinterest Pinners Sitemap",
            "url": "https://www.pinterest.com/html_sitemap/pinners_p.html",
            "description": "A public sitemap that lists Pinterest user profiles alphabetically, useful for OSINT and user discovery."
          }
        ]
      },
      {
        id: "spotify-tools",
        name: "Spotify",
        resources: [
          {
            "id": "spotifyplaylistanalyzer",
            "title": "Spotify Playlist Analyzer",
            "url": "https://www.chosic.com/spotify-playlist-analyzer/",
            "description": "Analyze any Spotify playlist to uncover detailed statistics such as top genres, moods, artists, decades, and more. Organize, filter, and export playlist data for deeper musical insights."
          }
        ]
      },
      {
        id: "twitch-tools",
        name: "Twitch",
        resources: [
          {
            "id": "twitchtracker",
            "title": "TwitchTracker",
            "url": "https://twitchtracker.com/",
            "description": "Provides analytics and statistics for Twitch streamers, including viewer counts, follower trends, and stream history."
          },
          {
            "id": "sullygnome",
            "title": "SullyGnome",
            "url": "https://sullygnome.com/",
            "description": "Detailed Twitch analytics platform offering insights on stream performance, games, and audience metrics."
          },
          {
            "id": "twitchstats",
            "title": "TwitchStats",
            "url": "https://twitchstats.net/",
            "description": "Tracks Twitch channels and games with live statistics, historical data, and trending streamers."
          }
        ]
      },
      {
        id: "github-tools",
        name: "GitHub",
        resources: [

          {
            "id": "githuntx",
            "title": "GitHuntX",
            "url": "https://githuntx.vercel.app/",
            "description": "GitHuntX fetches user GitHub profiles, original repositories, commits, and emails."
          },
          {
            "id": "githubcompare",
            "title": "GitHub Compare",
            "url": "https://www.githubcompare.com/",
            "description": "Compare GitHub repositories side by side to analyze differences in code, commits, issues, and more."
          },
          {
            "id": "githubprofilesummary",
            "title": "Profile Summary for GitHub",
            "url": "https://profile-summary-for-github.com/search",
            "description": "A tool to generate professional summaries and statistics based on your GitHub profile and activity."
          },
          {
            "id": "repostimeline",
            "title": "RepoTimeline",
            "url": "https://repostimeline.nazifbara.com/",
            "description": "Visual timeline of all activity on a GitHub repository, including commits, pull requests, issues, and more."
          },
          {
            "id": "ossinsight",
            "title": "OSSInsight",
            "url": "https://ossinsight.io/",
            "description": "Open-source software repository insights platform, offering detailed analytics on GitHub repositories."
          }
        ]        
      },
      {
        id: "onlyfans-tools",
        name: "OnlyFans",
        resources: [
          {
            "id": "onlyfanssearchhubite",
            "title": "OnlyFans Search - Hubite",
            "url": "https://hubite.com/en/onlyfans-search/",
            "description": "A tool to search for OnlyFans profiles and discover content creators based on keywords and filters."
          },
          {
            "id": "onlyfinder",
            "title": "OnlyFinder",
            "url": "https://onlyfinder.com/",
            "description": "A search engine dedicated to finding OnlyFans profiles, creators, and content."
          },
          {
            "id": "onlysearch",
            "title": "OnlySearch",
            "url": "https://onlysearch.co/",
            "description": "A platform to search for OnlyFans creators by username and explore available content."
          },
          {
            "id": "fansmetrics",
            "title": "FansMetrics",
            "url": "https://fansmetrics.com/",
            "description": "Provides analytics and insights on OnlyFans profiles, helping creators track their performance and growth."
          },
          {
            "id": "onlyfanslegalguide",
            "title": "OnlyFans Legal Guide",
            "url": "https://onlyfans.com/legalguide/",
            "description": "A legal guide for OnlyFans creators, offering information on contracts, rights, and platform policies."
          }
        ]        
      },
      {
        id: "kik-tools",
        name: "KIK Messenger",
        resources: [
          {
            "id": "kikusernames",
            "title": "Kik Usernames Search",
            "url": "https://kikusernames.com/search",
            "description": "A platform to search thousands of Kik usernames by username or location, helping users find new friends on Kik."
          },
          {
            "id": "kikprofile",
            "title": "Kik Profile",
            "url": "https://kik.me/<username>",
            "description": "Direct link to a user's Kik profile, where you can start a chat by entering their username."
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
            "id": "whoisfreaks",
            "title": "WhoisFreaks",
            "url": "https://whoisfreaks.com/",
            "description": "A Whois lookup tool that provides detailed domain registration information and IP lookup data."
          },
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
            "id": "passivedns",
            "title": "PassiveDNS",
            "url": "https://passivedns.mnemonic.no/",
            "description": "A service that provides historical DNS resolution data, useful for tracking domain name resolution over time."
          },
          {
            "id": "hostio",
            "title": "Host.io",
            "url": "https://host.io/",
            "description": "A DNS lookup tool that offers information about IP addresses, domain ownership, and associated subdomains."
          },
          {
            "id": "rapiddns",
            "title": "RapidDNS",
            "url": "https://rapiddns.io/",
            "description": "A DNS search engine that helps to identify domain names, IP addresses, and associated information."
          },
          {
            "id": "intodns",
            "title": "IntoDNS",
            "url": "https://intodns.com/",
            "description": "A DNS diagnostic tool that checks the health of your domain and provides insights into DNS records and configurations."
          },
          {
            "id": "viewdns",
            "title": "ViewDNS",
            "url": "https://viewdns.info/",
            "description": "A tool for performing DNS lookups, reverse IP lookups, and other domain-related information queries."
          },
          {
            "id": "dnslytics",
            "title": "DNSlytics",
            "url": "https://dnslytics.com/",
            "description": "A DNS intelligence and threat analysis platform that provides data on IP addresses, domains, and DNS records."
          },
          {
            "id": "dnstwister",
            "title": "DNS Twister",
            "url": "https://dnstwister.report/",
            "description": "A service for discovering domain name typosquatting and homograph attacks through DNS analysis."
          },
          {
            "id": "intelx-domain",
            "title": "IntelX Domain Lookup",
            "url": "https://intelx.io/tools?tab=domain",
            "description": "A platform for gathering intelligence about domain names, IP addresses, and historical DNS data."
          },
          {
            "id": "dnsinstitute",
            "title": "DNS Institute",
            "url": "https://www.dnsinstitute.com/",
            "description": "An educational resource for DNS security, offering tools and training for managing DNS infrastructure."
          },
          {
            "id": "completedns",
            "title": "CompleteDNS",
            "url": "https://completedns.com/",
            "description": "A DNS management and lookup platform that offers detailed DNS information, including security and performance analysis."
          }
        ]
      },
      {
        id: "ip-lookup",
        name: "IP Lookup",
        resources: [
          {
            "id": "iknowwhatyoudownload",
            "title": "I Know What You Download",
            "url": "https://iknowwhatyoudownload.com/en/peer/",
            "description": "A tool to check what users are downloading via P2P networks and provides detailed torrent information."
          },
          {
            "id": "abuseipdb",
            "title": "AbuseIPDB",
            "url": "https://www.abuseipdb.com/",
            "description": "A platform for reporting and checking IP addresses involved in malicious activities like hacking and spamming."
          },
          {
            "id": "bgphe",
            "title": "BGP.he.net",
            "url": "https://bgp.he.net/",
            "description": "A BGP (Border Gateway Protocol) lookup tool that provides detailed information about IP ranges, ASNs, and network routes."
          },
          {
            "id": "bgpview",
            "title": "BGPView",
            "url": "https://bgpview.io/",
            "description": "A service that provides BGP route information, including ASN lookups, IP address ranges, and network details."
          },
          {
            "id": "criminalip",
            "title": "Criminal IP",
            "url": "https://www.criminalip.io/",
            "description": "A cybersecurity intelligence tool for discovering, identifying, and tracking criminal activity on the internet."
          },
          {
            "id": "intelx",
            "title": "IntelX IP Lookup",
            "url": "https://intelx.io/tools?tab=ip",
            "description": "A tool for looking up IP addresses and gathering intelligence about their related networks and ownership."
          },
          {
            "id": "networksdb",
            "title": "NetworksDB",
            "url": "https://networksdb.io/",
            "description": "A platform that provides network and IP data with detailed insights on who owns the IP and their related networks."
          },
          {
            "id": "ipqualityscore",
            "title": "IPQualityScore",
            "url": "https://www.ipqualityscore.com/",
            "description": "A fraud prevention and IP intelligence tool that analyzes IP addresses to detect fraudulent activity."
          },
          {
            "id": "centralops",
            "title": "CentralOps",
            "url": "https://centralops.net/co/",
            "description": "A suite of online tools for DNS lookups, whois searches, and IP address diagnostics."
          },
          {
            "id": "infobyip",
            "title": "InfoByIP IP Lookup",
            "url": "https://www.infobyip.com/ipbulklookup.php",
            "description": "A bulk IP lookup tool providing detailed information about IP addresses, including geolocation and ownership."
          },
          {
            "id": "ipinfo",
            "title": "IPinfo",
            "url": "https://ipinfo.io/",
            "description": "A service providing IP geolocation, ASN details, and various IP-related information."
          },
          {
            "id": "ipapi",
            "title": "IP-API",
            "url": "https://ip-api.com/",
            "description": "An IP geolocation service that provides detailed information about IP addresses such as city, country, and ISP."
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
