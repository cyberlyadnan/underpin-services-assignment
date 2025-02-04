import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const footerData = {
  companyName: "Blackrose Club",
  description:
    "Blackrose Club targets the most active and technology-savvy target group in the DACH region and will later expand to serve the global market.",
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
    position: "top-10 left", // Top-left
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
    position: "top-1/3 left-1/2 -translate-x-1/2", // Centered horizontally
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
    position: "bottom-0 right-1/2", // Bottom-right
  },
];
