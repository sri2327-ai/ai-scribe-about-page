
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">S10.AI</Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Solutions Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/95 border border-gray-800">
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link to="/solutions/crush" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">CRUSH</div>
                        <p className="text-sm leading-tight text-gray-300">AI Medical Scribe Assistant</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link to="/solutions/bravo" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">BRAVO</div>
                        <p className="text-sm leading-tight text-gray-300">AI Patient Care Agent</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800">About</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/95 border border-gray-800">
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link to="/resources/about" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">S10 Story</div>
                        <p className="text-sm leading-tight text-gray-300">Learn about our journey</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link to="/resources/technology" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Trust & Technology</div>
                        <p className="text-sm leading-tight text-gray-300">Our tech stack and security</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link to="/integrations" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Integrations</div>
                        <p className="text-sm leading-tight text-gray-300">Seamless connectivity</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800">Resources</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/95 border border-gray-800">
                <ul className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/resources/blog" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Blog</div>
                        <p className="text-sm leading-tight text-gray-300">Latest insights and updates</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/resources/faq" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">FAQs</div>
                        <p className="text-sm leading-tight text-gray-300">Common questions answered</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/resources/customers" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Customers</div>
                        <p className="text-sm leading-tight text-gray-300">Success stories</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/resources/casestudies" className="flex flex-col justify-between rounded-md bg-gradient-to-b from-blue-950 to-black p-6 no-underline outline-none focus:shadow-md hover:bg-gray-900 transition-colors">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Case Studies</div>
                        <p className="text-sm leading-tight text-gray-300">In-depth implementation results</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
