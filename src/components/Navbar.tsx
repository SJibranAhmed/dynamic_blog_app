// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./Themebtn";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

import LoginForm from "./Login";
import SignUpForm from "./SignUp";
const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur">
      <div className="container px-4 lg:px-12 flex items-center justify-between h-16 border-b ">
        {/* Logo */}
        <div className="text-xl font-bold">SheikhBlogs</div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-400">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          {/* for login */}
          <LoginForm />
          {/* for sign up */}
          <SignUpForm />

          {/* for dark and light theme */}
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex  gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" aria-label="Open menu" className="">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col items-center justify-center  "
            >
              <SheetHeader>
                <SheetTitle className="text-4xl">SheikhBlogs</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <Link href="/" className="block text-lg hover:text-gray-400">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-lg hover:text-gray-400"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block text-lg hover:text-gray-400"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact"
                  className="block text-lg hover:text-gray-400"
                >
                  Contact
                </Link>
              </div>
              <div className="flex flex-col w-full mt-6 space-y-2">
                <SignUpForm />
                <LoginForm />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
