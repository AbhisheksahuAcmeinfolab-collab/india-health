"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import pic1 from "../assets/icon1.png";
import pic2 from "../assets/icon2.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Logo & About */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4 tracking-wide hover:text-cyan-400 transition-colors">
            Mediox
          </h2>
          <p className="mb-4 text-sm leading-relaxed">
            Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai
            Psum Dolor Sit Amet, Consecteture.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm shadow-md hover:scale-105 transition-transform">
            GET CONSULTANT →
          </button>
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full border border-gray-500 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white transition transform hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Cardiology Care",
              "Urgent Care",
              "Orthopedic Care",
              "Neurology Care",
              "Gynaecologists",
              "Therapy",
              "Dental Service",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-1"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Our Services",
              "Our Team",
              "Latest Blog",
              "Appointments",
              "Help & FAQS",
              "Contact Us",
            ].map((link, i) => (
              <li
                key={i}
                className="hover:text-cyan-400 cursor-pointer transition-all hover:translate-x-1"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Recent News */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            Recent News
          </h3>
          <div className="space-y-5">
            {[pic1, pic2].map((img, i) => (
              <div key={i} className="flex gap-3 group cursor-pointer">
                <Image
                  src={img}
                  alt="News"
                  className="w-16 h-16 rounded-md object-cover shadow-md group-hover:scale-105 transition-transform"
                />
                <div>
                  <p className="text-xs text-gray-400 group-hover:text-cyan-400">
                    By Admin • 2 comments
                  </p>
                  <h4 className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                    {i === 0
                      ? "Collaboratively Pontificate Bleedi Edge Resources"
                      : "Quick Sync The Horse Is Out Of The Barn, Yet This Vendor"}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start hover:text-cyan-400 transition-colors cursor-pointer">
            <MdLocationOn className="text-cyan-400 w-5 h-5" />
            <span>4648 Rocky Road Philadelphia PA, 1920</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start hover:text-cyan-400 transition-colors cursor-pointer">
            <MdEmail className="text-cyan-400 w-5 h-5" />
            <span>info@mediox.com</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start hover:text-cyan-400 transition-colors cursor-pointer">
            <MdPhone className="text-cyan-400 w-5 h-5" />
            <span>+208-555-0112</span>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Mediox. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}


























// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import pic1 from "../assets/icon1.png";
// import pic2 from "../assets/icon2.png";
// import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";



// export default function Footer() {
//   return (
//     <footer className="bg-blue-950 text-gray-300">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Column 1: Logo & About */}
//         <div>
//           <h2 className="text-white text-2xl font-bold mb-4">Mediox</h2>
//           <p className="mb-4 text-sm">
//             Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum
//             Dolor Sit Amet, Consecteture.
//           </p>
//           <button className="bg-cyan-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-cyan-600 transition">
//             GET CONSULTANT →
//           </button>
//           <div className="flex gap-4 mt-4">
//             <a href="#" className="hover:text-cyan-400">
//               <FaFacebookF size={20} />
//             </a>
//             <a href="#" className="hover:text-cyan-400">
//               <FaTwitter size={20} />
//             </a>
//             <a href="#" className="hover:text-cyan-400">
//               <FaInstagram size={20} />
//             </a>
//             <a href="#" className="hover:text-cyan-400">
//               <FaLinkedinIn size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Column 2: Our Services */}
//         <div>
//           <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
//             Our Services
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-cyan-400">Cardiology Care</li>
//             <li className="hover:text-cyan-400">Urgent Care</li>
//             <li className="hover:text-cyan-400">Orthopedic Care</li>
//             <li className="hover:text-cyan-400">Neurology Care</li>
//             <li className="hover:text-cyan-400">Gynaecologists</li>
//             <li className="hover:text-cyan-400">Therapy</li>
//             <li className="hover:text-cyan-400">Dental Service</li>
//           </ul>
//         </div>

//         {/* Column 3: Useful Links */}
//         <div>
//           <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
//             Useful Links
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li className="hover:text-cyan-400">About Us</li>
//             <li className="hover:text-cyan-400">Our Services</li>
//             <li className="hover:text-cyan-400">Our Team</li>
//             <li className="hover:text-cyan-400">Latest Blog</li>
//             <li className="hover:text-cyan-400">Appointments</li>
//             <li className="hover:text-cyan-400">Help & FAQS</li>
//             <li className="hover:text-cyan-400">Contact Us</li>
//           </ul>
//         </div>

//         {/* Column 4: Recent News */}
//         <div>
//           <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
//             Recent News
//           </h3>
//           <div className="space-y-4">
//             <div className="flex gap-3">
//               <Image
//                 src={pic1}
//                 alt="News"
//                 className="w-16 h-16 rounded-md object-cover"
//               />
//               <div className="hover:text-cyan-400">
//                 <p className="text-xs text-gray-400 hover:text-cyan-400">
//                   By Admin • 2 comments
//                 </p>
//                 <h4 className="text-sm text-white hover:text-cyan-400 cursor-pointer">
//                   Collaboratively Pontificate Bleedi Edge Resources
//                 </h4>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <Image
//                 src={pic2}
//                 alt="News"
//                 className="w-16 h-16 rounded-md object-cover"
//               />
//               <div>
//                 <p className="text-xs text-gray-400 hover:text-cyan-400">
//                   By Admin • 2 comments
//                 </p>
//                 <h4 className="text-sm text-white hover:text-cyan-400 cursor-pointer">
//                   Quick Sync The Horse Is Out Of The Barn, Yet This Vendor
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="bg-blue-900 py-6">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
//           <div className="flex items-center gap-2 hover:text-cyan-400">
//             <MdLocationOn className="text-cyan-400 w-5 h-5" />
//             <span>4648 Rocky Road Philadelphia PA, 1920</span>
//           </div>
//           <div className="flex items-center gap-2 hover:text-cyan-400">
//             <MdEmail className="text-cyan-400 w-5 h-5" />
//             <span>info@mediox.com</span>
//           </div>
//           <div className="flex items-center gap-2 hover:text-cyan-400">
//             <MdPhone className="text-cyan-400 w-5 h-5" />
//             <span>+208-555-0112</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
