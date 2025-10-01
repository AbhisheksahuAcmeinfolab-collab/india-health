"use client";

import img from "../assets/newimage/Logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Fees", href: "/fees" },
    { name: "Contact", href: "/contact" },
    { name: "Top Hospitals", href: "/hospitals" },
    { name: "Top Doctors", href: "/doctors" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-3">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 px-8">
            <Image
              src={img}
              alt="Health India Logo"
              width={120}
              height={50}
              className="rounded-md"
            />
          </Link>
          {/* show navbar component in mobile devices in sm, md, xl:hidden  */}
          <div className="hidden xl:flex space-x-10 ">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-bold transition duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-black-1000 hover:text-blue-600"
                  }`}
                >
                  {item.name}

                  {/* underline ONLY when active */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black-1000 hover:text-blue-600 transition duration-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div>
        {isOpen && (
          // not show navbar component in mobile devices in sm, md, xl:hidden
          <div className="xl:hidden px-4 pb-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // close menu on click
                  className={`block font-bold transition duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-black-1000 hover:text-blue-600"
                  }`}
                >
                  <span className="relative inline-block">
                    {item.name}
                    {/* underline ONLY when active */}
                    {isActive && (
                      <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-600" />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
