"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import img from "../assets/image/health.webp"
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import pic1 from "../assets/icon1.png";
import pic2 from "../assets/icon2.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div>
          <Image
            src={img}
            alt="Health India Logo"
            width={180}
            height={50}
            className="rounded-md mb-4"
          />
          {/* <h2 className="text-white text-3xl font-bold mb-4 tracking-wide hover:text-cyan-400 transition-colors">
            INDIAN HEALTH ADVISER
          </h2> */}
          <p className="mb-4 text-sm leading-relaxed">
            Indian Health Adviser (IHA) is a healthcare facilitator seeking to
            make health and wellness easier for people of international
            residents, their families, and their friends.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm shadow-md transition-transform"
          >
            GET CONSULTANT →
          </motion.button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full border border-gray-500 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            OUR SERVICES
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
            ].map((service, i) => (
              <motion.li
                key={i}
                whileTap={{ scale: 0.95 }}
                whileHover={{ x: 6, color: "#22d3ee" }}
                className="cursor-pointer transition-all"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Breast Cancer Treatment",
              "Brain Tumor Surgery",
              "Endovascular Aneurysm Repair",
              "Rhabdomyosarcoma Treatment",
              "Kidney Transplant",
              "Liver Transplant",
              "Oral Cancer",
            ].map((link, i) => (
              <motion.li
                key={i}
                whileTap={{ scale: 0.95 }}
                whileHover={{ x: 6, color: "#22d3ee" }}
                className="cursor-pointer transition-all"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            RECENT BLOGS
          </h3>
          <div className="space-y-5">
            {[pic1, pic2].map((img, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-3 group cursor-pointer"
              >
                {/* ✅ Use Next.js Image instead of <img> */}
                <Image
                  src={img}
                  alt="News"
                  className="w-16 h-16 rounded-md object-cover shadow-md transition-transform"
                />
                <div>
                  <p className="text-xs text-gray-400 group-hover:text-cyan-400">
                    By Admin • 2 comments
                  </p>
                  <h4 className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                    {i === 0
                      ? "Top Medical Procedures International Patients Choose India For"
                      : "Cancer, Cardiac, and Kidney Care: Why Patients Trust Indian Hospitals"}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center md:text-left">
          {[
            { icon: MdLocationOn, text: "Delhi, India" },
            { icon: MdEmail, text: "info@ekamcure.com" },
            { icon: MdPhone, text: "(+91) 9990205353" },
          ].map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.95 }}
              whileHover={{ color: "#22d3ee" }}
              className="flex items-center gap-2 justify-center md:justify-start cursor-pointer transition-colors"
            >
              <Icon className="text-cyan-400 w-5 h-5" />
              <span>{text}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Heath-Indian Advisor. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
