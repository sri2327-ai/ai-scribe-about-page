import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CircleUserRound, Menu, Search, Bell, Plus, Settings, Keyboard, QuestionMarkCircled, LifeBuoy, Moon, Sun, ChevronDown, Check, Copy, ExternalLink, FileText, Users, Brain, Wrench, Code, HeartPulse, BookOpen } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">

        {/* Logo and Navigation Menu */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold mr-6">
            CRUSH AI
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/about" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/crush-ai" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                  Crush AI
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/bravo" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                  Bravo
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/technology" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                  Technology
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/case-study" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                  Case Study
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions: Search, Theme Toggle, and Contact Button */}
        <div className="flex items-center space-x-4">
          {/* Search Icon (Placeholder) */}
          {/* <Search className="w-5 h-5 text-gray-500 cursor-pointer" /> */}

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Contact Button */}
          <Link to="/contact">
            <Button variant="default">Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu (Hidden by default on larger screens) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through our site.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                About
              </Link>
              <Link to="/crush-ai" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Crush AI
              </Link>
              <Link to="/bravo" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Bravo
              </Link>
              <Link to="/technology" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Technology
              </Link>
              <Link to="/case-study" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Case Study
              </Link>
              <Link to="/blog" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Blog
              </Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                Contact
              </Link>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
