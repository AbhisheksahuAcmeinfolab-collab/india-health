// "use client";

// import {
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
// } from "react-icons/fa";

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       {/* 🔹 Top Header */}
//       <div className="bg-[#053161] text-white text-sm">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
//           {/* Left side */}
//           <div className="flex flex-wrap items-center gap-6">
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-white" />
//               <span>Call +(704) 279-1249</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaMapMarkerAlt className="text-white" />
//               <span>49 Bakery Street, London, UK</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaEnvelope className="text-white" />
//               <span>contact@pbminfotech.com</span>
//             </div>
//           </div>

//           {/* Right side (social icons) */}
//           <div className="flex items-center gap-4 mt-2 md:mt-0">
//             <FaFacebookF className="cursor-pointer hover:text-gray-300" />
//             <FaTwitter className="cursor-pointer hover:text-gray-300" />
//             <FaInstagram className="cursor-pointer hover:text-gray-300" />
//             <FaYoutube className="cursor-pointer hover:text-gray-300" />
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
//           {/* Logo */}
//           <div className="text-2xl font-bold text-[#053161]">Docmet</div>

//           {/* Links */}
//           <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//             <li className="hover:text-[#053161] cursor-pointer">Home</li>
//             <li className="hover:text-[#053161] cursor-pointer">About Us</li>
//             <li className="hover:text-[#053161] cursor-pointer">Services</li>
//             <li className="hover:text-[#053161] cursor-pointer">Treatments</li>
//             <li className="hover:text-[#053161] cursor-pointer">Blog</li>
//             <li className="hover:text-[#053161] cursor-pointer">Contact Us</li>
//           </ul>

//           {/* Right Side */}
//           <div className="flex items-center gap-6">
//             <button className="hidden md:block bg-[#007bff] text-white px-5 py-2 rounded hover:bg-[#0056b3] transition">
//               BOOK ONLINE →
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

"use client";
import img from "../assets/image/health.trans.png"
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
    { name: "Services", href: "/services" },
    { name: "Treatment", href: "/treatment" },
    { name: "Top Hospitals", href: "/hospitals" },
    { name: "Top Doctors", href: "/doctors" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    // <nav className="bg-transparent shadow-md z-50 py-2">
    // <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
     <nav className="bg-white shadow-md sticky top-0 z-50 py-2"> 
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={img}
              alt="Health India Logo"
              width={170}
              height={50}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition duration-200 focus:outline-none"
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

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
