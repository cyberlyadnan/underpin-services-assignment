import { FaDiscord, FaTwitter, FaInstagram, FaYoutube,FaUser, FaLayerGroup } from "react-icons/fa";
import { MdWork, MdPeople } from "react-icons/md";

export const footerData = {
  companyName: "Blackrose Club",
  description:
    "Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.",
  socialLinks: [
    { icon: FaDiscord, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaYoutube, href: "#" },
  ],
  marketplaceLinks: [
    "Imprint",
    "Contact",
    "Terms & Conditions",
    "Privacy Policy",
    "Become A Club Member",
    "Become A Shop Owner",
    "Become An Investor",
  ],
  footerNavLinks: ["Home", "About", "Roadmap", "Services", "Team"],
  headquarters: [
    {
      address: "BLACKROSE CLUB LTD Victoria House, Suite 4138 Surrey Quays Road",
      location: "London SE16 7DX, United Kingdom",
    },
    {
      address: "Blackrose Club Ltd, Pilotystr. 3890402",
      location: "NürnbergUser ID: DE 225883316",
    },
  ],
};


// Array of menu items
export const menuItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Roadmap" },
    { name: "Services" },
    { name: "Team" },
  ];


export const contactButtonText = "Become a Shop Owner"



export const cards = [
  {
    title: "Become an Investor",
    description:
      "This feature is not available to everyone, but you can access it by requesting us.",
    link: "#",
    list: [],
    position: "top-10 left-0", // Top-left
  },
  {
    title: "Become a Club Member",
    description: "Product Blackrose Club Shopowner costs 18,000€ net and includes:",
    link: "#",
    list: [
      "10 seminars on mindset, crypto, metaverse, and NFT",
      "1 workshop on job opportunities in the Metaverse",
      "Permission to enter the virtual Blackrose Club World",
    ],
    position: "top-1/3 left-1/3 -translate-x-1/2",

  },
  {
    title: "Become a Shop Owner",
    description: "Product Blackrose Club Shopowner costs 18,000€ net and includes:",
    link: "#",
    list: [
      "All benefits of the Blackrose Club Member package",
      "Run your own virtual shop in the Blackrose Club World",
      "Get 20% of the profits you generate in your virtual shop",
      "Eligible for profit distribution from advertising and member pool",
    ],
    position: "top-0 right-0", // Bottom-right
  },
];



export const services = [
  {
    title: "Individualisation",
    icon: <FaUser className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
  {
    title: "User Created Content",
    icon: <FaLayerGroup className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
  {
    title: "Income Opportunities",
    icon: <MdWork className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
  {
    title: "Social Media",
    icon: <MdPeople className="text-xl text-white" />,
    description:
      "Unlock Limitless Possibilities In The Metaverse - A Realm Merging Business And Leisure. Be Among The Pioneers.",
  },
];

export const documents = [
  {
    title: "White Paper EN",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/img1.png", // Replace with actual image paths
  },
  {
    title: "White Paper DE",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/img2.png", // Replace with actual image paths
  },
  {
    title: "Pitchdeck EN",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/img3.png", // Replace with actual image paths
  },
  {
    title: "Pitchdeck DE",
    description: "In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
    image: "/images/img4.png", // Replace with actual image paths
  },
];


export const marketOpportunitiesData = {
  title: "Market Opportunities",
  description:
    "Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region And Will Later Expand To Serve The Global Market.",
  points: [
    "Market - Around 66 Million E-Commerce Customers In The DACH Region Spent Over 100 Billion Euros On Online Purchases In 2021. Most Popular Orders Were Clothes, Shoes, Food, And Beauty Products.",
    "Target Group - The Percentage Of Internet Users In The EU Who Order Products Online Is Increasing, Especially Among 16-24 Years Old.",
    "Behavior - Consumers Prefer Online Over Physical Orders Due To Convenience, Variety, Competitive Prices, And 24/7 Access.",
  ],
};


export const heroData = {

  heading: "Seize Early-Opportunities In The-Metaverses-For-Business & Leisure",
  subtext:
    "You can shop your favorite products, join and organize cultural and sports events, sell your products in your own metaverse, and gain yield in an innovative growth market.",
  buttonLinks: [
    {
      href: "/services",
      label: "Explore Services",
      style: "bg-themeColor text-black",
    },
    {
      href: "/contact",
      label: "Contact us",
      style: "border border-gray-400 text-white",
    },
  ],
};

export const servicesDetails = {
  title:"Our Key Services",
  description:"We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses. Simplify your key handling with our reliable key duplication, storage, and tracking services.",
  buttonText:"Explore Services"
}

export const teamMembers = {
  title:"Team Members",
  description:"We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.Simplify your key handling with our reliable key duplication, storage, and tracking services.",
  teamMembers:[
  {
    name: "Nikolaus Schauersberger",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "Founder / CEO",
    image: "/images/team1.png",
    positions:"bottom-20 left-40",
  },
  {
    name: "John Doe",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "CTO",
    image: "/images/team2.png",
    positions:"top-1/4 left-80",

  },
  {
    name: "Jane Smith",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "COO",
    image: "/images/team3.png",
    positions:"top-0 left-1/2 -translate-x-1/2",
  },
  {
    name: "Michael Brown",
    desc: "We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.",
    role: "CFO",
    image: "/images/team4.png",
    positions:"top-1/4 right-80",
  },
]}

export const documentsSectionData = {
  documents: documents,
  title: "Whitepaper & Pitch Deck",
  desc: "Blackrose Club targets the most active and technology-savvy target group in the DACH region and will later expand to serve the global market.",
};
