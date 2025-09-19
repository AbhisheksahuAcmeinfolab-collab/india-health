'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Treatment', href: '/treatment' },
    { name: 'Top Hospitals', href: '/hospitals' },
    { name: 'Top Doctors', href: '/doctors' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/health.jpg"
              alt="Health India Logo"
              width={125}
              height={70}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}




// // "use client";
// // components/Navbar.js
// // 'use client'; // Needed for Bootstrap's collapse toggle

// import Link from "next/link";
// import Image from "next/image";
// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-white shadow-md sticky top-0 z-50">
//       <div className="container-fluid px-4">
//         <Link href="/" className="navbar-brand flex items-center gap-2">
//           <Image
//             src="/health.jpg"
//             alt="Health India Logo"
//             width={150}
//             height={50}
//             className="rounded-md"
//           />
//         </Link>

//         <button
//           className="navbar-toggler border-0 focus:outline-none"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-end" id="navbarNav">
//           <ul className="navbar-nav gap-3">
//             <li className="nav-item">
//               <Link href="/" className="nav-link text-blue-600 font-semibold hover:text-blue-800">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/about" className="nav-link text-gray-700 hover:text-blue-600">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/services" className="nav-link text-gray-700 hover:text-blue-600">
//                 Services
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/treatment" className="nav-link text-gray-700 hover:text-blue-600">
//                 Treatment
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/hospitals" className="nav-link text-gray-700 hover:text-blue-600">
//                 Top Hospitals
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/doctors" className="nav-link text-gray-700 hover:text-blue-600">
//                 Top Doctors
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/blogs" className="nav-link text-gray-700 hover:text-blue-600">
//                 Blogs
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/contact" className="nav-link text-gray-700 hover:text-blue-600">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
