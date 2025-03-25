"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Institutions", href: "/institutions" },
  { name: "Demo Lectures", href: "/lectures" },
  { name: "For Schools", href: "/schools" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-40 shadow-sm">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                ShikshaFinder
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-900 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              size="sm"
              className="bg-[#0066FF] hover:bg-blue-700"
              asChild
            >
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav rendered outside the header */}
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </>
  );
}
