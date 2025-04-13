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
  {
    id: "data-leaks",
    name: "Data Leaks & Breaches",
    subfolders: [
      {
        id: "breach-databases",
        name: "Breach Databases",
        resources: [
          {
            "id": "pentester",
            "title": "Pentester",
            "url": "https://pentester.com",
            "description": "Breach monitoring tool designed for penetration testers and security researchers."
          },
          {
            "id": "haveibeenpwned",
            "title": "Have I Been Pwned",
            "url": "https://haveibeenpwned.com/",
            "description": "Check if your email or phone number has been part of a data breach."
          },
          {
            "id": "dehashed",
            "title": "DeHashed",
            "url": "https://www.dehashed.com/",
            "description": "Advanced search engine for breached data, leaked databases, and more."
          },
          {
            "id": "leakpeek",
            "title": "LeakPeek",
            "url": "https://leakpeek.com/",
            "description": "Find leaked information from various sources, including breached databases."
          },
          {
            "id": "breachdirectory",
            "title": "BreachDirectory",
            "url": "https://breachdirectory.org/",
            "description": "Database search tool for compromised email addresses and passwords."
          },
          {
            "id": "intelx",
            "title": "Intelligence X",
            "url": "https://intelx.io/",
            "description": "Search engine for breached data, leaked files, and darknet content."
          },
          {
            "id": "leakcheck",
            "title": "LeakCheck",
            "url": "https://leakcheck.io/",
            "description": "Service for checking leaked credentials, personal information, and more."
          },
          {
            "id": "haveibeenzuckered",
            "title": "Have I Been Zuckered",
            "url": "https://haveibeenzuckered.com/",
            "description": "Tool for checking if your Facebook data has been leaked online."
          },
          {
            "id": "ddosecrets",
            "title": "DDoSecrets",
            "url": "https://ddosecrets.com/all_categories",
            "description": "Transparency collective sharing leaked data from various sources."
          },
          {
            "id": "darkeye",
            "title": "DarkEye",
            "url": "https://darkeye.org/search",
            "description": "Search tool for discovering compromised data across multiple sources."
          },
          {
            "id": "proxynova",
            "title": "ProxyNova",
            "url": "https://www.proxynova.com/tools/comb/",
            "description": "Tool for searching compromised combos and leaked information."
          },
          {
            "id": "vxintelligence",
            "title": "VX Intelligence",
            "url": "https://vxintelligence.com/",
            "description": "Platform providing insights into compromised data and breach analysis."
          },
          {
            "id": "breachvip",
            "title": "Breach VIP",
            "url": "https://breach.vip/",
            "description": "Service providing access to premium breached data sources."
          },
          {
            "id": "alertsbar",
            "title": "Alerts Bar",
            "url": "https://www.alerts.bar/",
            "description": "Online tool for monitoring data breaches and leaked credentials."
          }
        ]
      }
    ]
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    subfolders: [
      {
        id: "business-records",
        name: "Business Records",
        resources: [
          {
            "id": "crunchbase",
            "title": "Crunchbase",
            "url": "https://www.crunchbase.com/",
            "description": "Business intelligence platform providing company insights, funding, and leadership details."
          },
          {
            "id": "opencorporates",
            "title": "OpenCorporates",
            "url": "https://opencorporates.com/",
            "description": "Largest open database of companies worldwide, providing corporate records and ownership details."
          },
          {
            "id": "dnb",
            "title": "Dun & Bradstreet (D&B)",
            "url": "https://www.dnb.com/",
            "description": "Global business directory offering financial, risk, and corporate data insights."
          },
          {
            "id": "gleif",
            "title": "GLEIF",
            "url": "https://search.gleif.org/#/search/",
            "description": "Global Legal Entity Identifier Foundation (GLEIF) search for corporate LEIs."
          },
          {
            "id": "openleis",
            "title": "Open LEIs",
            "url": "http://openleis.com/",
            "description": "Search for Legal Entity Identifiers (LEIs) of registered businesses worldwide."
          },
          {
            "id": "bizdirlib",
            "title": "BizDirLib",
            "url": "https://bizdirlib.com/country",
            "description": "Global business directory providing company listings by country."
          },
          {
            "id": "panjiva",
            "title": "Panjiva",
            "url": "https://panjiva.com/search",
            "description": "Global trade intelligence platform tracking import/export shipments."
          },
          {
            "id": "opensanctions",
            "title": "OpenSanctions",
            "url": "https://www.opensanctions.org/",
            "description": "Database of sanctioned individuals, organizations, and entities worldwide."
          },
          {
            "id": "tendersinfo",
            "title": "Tendersinfo",
            "url": "https://www.tendersinfo.com/",
            "description": "Global database for government and private sector tenders and procurement opportunities."
          },
          {
            "id": "propublica-nonprofits",
            "title": "ProPublica Nonprofits",
            "url": "https://projects.propublica.org/nonprofits/",
            "description": "Database of U.S. nonprofit organizations with financial and operational details."
          }
        ]
      },
      {
        id: "patents-trademark",
        name: "Patents & Trademark",
        resources: [
          {
            "id": "google-patents",
            "title": "Google Patents",
            "url": "https://patents.google.com/",
            "description": "Search engine for global patent data including full-text and legal status."
          },
          {
            "id": "uspto-report",
            "title": "USPTO Report",
            "url": "https://uspto.report/",
            "description": "Patent and trademark lookup tool for the U.S. Patent and Trademark Office (USPTO)."
          },
          {
            "id": "espacenet",
            "title": "Espacenet",
            "url": "https://worldwide.espacenet.com/",
            "description": "European Patent Office database offering global patent searches and data analysis tools."
          },
          {
            "id": "wipo-branddb",
            "title": "WIPO Global Brand Database",
            "url": "https://www3.wipo.int/branddb/en/",
            "description": "Searchable database of international trademarks, appellations of origin, and emblems maintained by WIPO."
          },
          {
            "id": "us-copyright-catalog",
            "title": "U.S. Copyright Catalog",
            "url": "https://cocatalog.loc.gov/cgi-bin/Pwebrecon.cgi?DB=local&PAGE=First",
            "description": "Library of Congress catalog for searching U.S. copyright registrations and records."
          }
        ]
      }
    ]
  },
  {
    id: "username",
    name: "Username Search",
    subfolders: [
      {
        id: "username-enumeration",
        name: "Username Enumeration",
        resources: [
          {
            "id": "idcrawl-username-search",
            "title": "IDCrawl",
            "url": "https://www.idcrawl.com/username-search",
            "description": "A tool that uncovers social media profiles and real people behind a username across various platforms."
          },
          {
            "id": "osintrocks",
            "title": "osint.rocks",
            "url": "https://osint.rocks/",
            "description": "Provides web-based access to the Sherlock and Maigret tools for username searches across social networks and websites."
          },
          {
            "id": "whatsmyname",
            "title": "WhatsMyName",
            "url": "https://whatsmyname.app",
            "description": "Username enumeration across multiple platforms."
          },
          {
            "id": "sherlock",
            "title": "Sherlock",
            "url": "https://github.com/sherlock-project/sherlock",
            "description": "Hunt down social media accounts by username across social networks."
          },
          {
            "id": "maigret",
            "title": "Maigret",
            "url": "https://github.com/soxoj/maigret",
            "description": "Collects a dossier on a person by username from thousands of sites."
          },
          {
            "id": "blackbird",
            "title": "Blackbird",
            "url": "https://github.com/p1ngul1n0/blackbird",
            "description": "Username search tool that analyzes social media platforms for user profiles."
          },
          {
            "id": "socialcatfish",
            "title": "Social Catfish",
            "url": "https://socialcatfish.com/",
            "description": "Find people online by username, email, phone, or image search."
          },
          {
            "id": "192com",
            "title": "192.com",
            "url": "https://www.192.com/",
            "description": "UK-based people search tool providing addresses, phone numbers, and business records."
          },
          {
            "id": "bellingcat-name-variant",
            "title": "Bellingcat Name Variant Search",
            "url": "https://bellingcat.github.io/name-variant-search",
            "description": "Searches multiple name variations across different languages."
          },
          {
            "id": "fastpeoplesearch",
            "title": "Fast People Search",
            "url": "https://www.fastpeoplesearch.com/",
            "description": "Finds people addresses, phone numbers, and email records in the US."
          },
          {
            "id": "intelx-username",
            "title": "IntelX Username Search",
            "url": "https://intelx.io/tools?tab=username",
            "description": "Find usernames across multiple data sources with IntelX tools."
          },
          {
            "id": "intelx-person",
            "title": "IntelX Person Search",
            "url": "https://intelx.io/tools?tab=person",
            "description": "Searches for people using IntelX intelligence database."
          },
          {
            "id": "publicrecords-searchsystems",
            "title": "Public Records Search Systems",
            "url": "https://publicrecords.searchsystems.net/",
            "description": "Search for public records, including business, criminal, and government data."
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
