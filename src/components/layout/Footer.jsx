import { footerData } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";



const Footer = () => {
  return (
    <footer className="bg-black font-special text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div>
          <div className="inline-flex md:flex-row flex-col space-y-3 pl-2 pr-4 py-2 rounded-md items-center">
            <Image src="/logo/Logo.svg" width={40} height={40} alt="Logo" />
            <span className="text-white font-bakbak text-2xl ml-2">{footerData.companyName}</span>
          </div>
          <p className="mt-4 text-gray-400 text-sm">{footerData.description}</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {footerData.socialLinks.map(({ icon: Icon, href }, index) => (
              <Link key={index} href={href} className="text-2xl cursor-pointer hover:text-themeColor">
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font font-bakbak text-lg">Marketplace</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            {footerData.marketplaceLinks.map((link, index) => (
              <li key={index} className="hover:text-themeColor cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bakbak text-lg">Headquarters</h3>
          {footerData.headquarters.map((hq, index) => (
            <p key={index} className="mt-4 text-gray-400 text-sm">
              {hq.address}
              <br />
              {hq.location}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-[#2B3238] md:px-[10%] flex flex-col md:flex-row justify-between items-center border-gray-700 mt-8 py-6 text-center text-gray-500 text-sm">
        <div className="text-white font-poppins">Copyright © 2022 Blackrose Club</div>
        <div className="flex justify-center space-x-3 mt-2 text-md text-white">
          {footerData.footerNavLinks.map((link, index) => (
            <span key={index} className="hover:text-themeColor font-poppins cursor-pointer">
              {link}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
