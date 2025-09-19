// 'use client';
import { MdPhone } from "react-icons/md";
// import { MdWhatsapp } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function TopHeader() {
  return (
    <div className="bg-blue-900 text-white text-sm px-4 py-4">
      <div className="bg-blue-900 text-white">
        <div className="flex flex-wrap gap-6">
          {/* Call / WhatsApp */}
          <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="bg-blue-900 rounded-full shadow-md">
              <MdPhone className="w-5 h-5" />
            </div>
            <span className="font-medium">Call (791) 579 2419</span>
          </div>

          {/* Partner With Us */}
          <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="bg-blue-900 rounded-full shadow-md">
              <FaHandshake className="w-5 h-5" />
            </div>
            <span className="font-medium">Partner With Us!</span>
          </div>

          {/* Get Free Quote */}
          <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="bg-blue-900 rounded-full shadow-md">
              <MdEmail className="w-5 h-5" />
            </div>
            <span className="font-medium">Get Free Quote!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
