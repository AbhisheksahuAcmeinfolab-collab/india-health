// "use client";
// import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// export default function TopHeader() {
//   return (
//     <div className="w-full bg-[#053161] text-white text-xs md:text-sm py-2 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
//         {/* Left Side: Contact Info */}
//         <div className="flex flex-wrap gap-6">
//           <div className="flex items-center gap-2 hover:text-cyan-400 transition cursor-pointer">
//             <MdPhone className="w-4 h-4" />
//             <span>+(704) 279-1249</span>
//           </div>

//           <div className="flex items-center gap-2 hover:text-cyan-400 transition cursor-pointer">
//             <MdLocationOn className="w-4 h-4" />
//             <span>49 Bakery Street, London, UK</span>
//           </div>

//           <div className="flex items-center gap-2 hover:text-cyan-400 transition cursor-pointer">
//             <MdEmail className="w-4 h-4" />
//             <span>contact@pbminfotech.com</span>
//           </div>
//         </div>

//         {/* Right Side: Social Icons */}
//         <div className="flex gap-4">
//           {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
//             <a
//               key={i}
//               href="#"
//               className="hover:text-cyan-400 transition"
//             >
//               <Icon className="w-4 h-4" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import { MdPhone } from "react-icons/md";
// import { MdWhatsapp } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function TopHeader() {
  return (
    <div className="bg-[#053161] text-white text-sm px-13 py-3 flex">
      <div className="bg-[#053161] text-white">
        <div className="flex flex-wrap gap-6">
          {/* Call / WhatsApp */}
          <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="bg-[#053161] rounded-full shadow-md">
              <MdPhone className="w-5 h-5" />
            </div>
            <span className="font-medium">Call (+91) 9990205353</span>
          </div>

          {/* Partner With Us */}
          <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="bg-[#053161] rounded-full shadow-md">
              <FaHandshake className="w-5 h-5" />
            </div>
            <span className="font-medium">Partner With Us!</span>
          </div>

          {/* Get Free Quote */}
          <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="bg-[#053161] rounded-full shadow-md">
              <MdEmail className="w-5 h-5" />
            </div>
            <span className="font-medium">Get Free Quote!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
