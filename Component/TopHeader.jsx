"use client";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div
      className="bg-[#053161] text-white hover:bg-cyan-600 text-sm px-16 py-3"
      dir="rtl"
    >
      {/* <div className="flex flex-wrap gap-6 px-12"> */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-right gap-4 md:gap-6 px-4 sm:px-6 lg:px-8">
        {/* Call / WhatsApp */}
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <span className="font-medium">Call (+91) 9990205353</span>
          <MdPhone className="w-5 h-5" />
        </div>

        {/* Partner With Us */}
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <span className="font-medium">Partner With Us</span>
          <FaHandshake className="w-5 h-5" />
        </div>

        {/* Get Free Quote */}
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <span className="font-medium">Get Free Quote</span>
          <MdEmail className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
