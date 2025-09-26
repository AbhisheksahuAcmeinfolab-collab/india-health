"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import img from "../assets/image/hello.png";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import pic1 from "../assets/icon1.png";
import pic2 from "../assets/icon2.png";

export default function Footer() {
  const infoItems = [
    {
      icon: MdLocationOn,
      label: "Office Address",
      text: "Delhi, India",
    },
    {
      icon: MdEmail,
      label: "Send Email",
      text: "info@ekamcure.com",
    },
    {
      icon: MdPhone,
      label: "Call Emergency",
      text: "(+91) 9990205353",
    },
  ];

  const lines = [
    "Indian Health Adviser (IHA) is a healthcare facilitator seeking to make health and wellness easier for people of international residents, their families, and their friends.",
  ];

  // const hoverEffect = {
  //   whileHover: { scale: 1.05, backgroundColor: "#06b6d4" }, // cyan-500
  //   transition: { duration: 0.3, ease: "easeInOut" },
  // };

  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-2 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div>
          <Image
            src={img}
            alt="Health India Logo"
            width={170}
            height={50}
            className="rounded-md mb-2 py-2 "
          />

          <div className="flex flex-col space-y-2 p-4">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className="text-sm leading-relaxed bg-transparent p-1 rounded cursor-pointer"
                // {...hoverEffect}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm shadow-md transition-transform"
          >
            GET CONSULTATION →
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
              "Liver Transplantation",
              "Heart Transplant",
              "Bone Marrow Transplants",
              "Oral Cancer",
              "Top Hospitals",
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r shadow-lg bg-cover bg-center bg-[url('../assets/image/footer-contact-bg.jpg')]">
          {/* content here */}

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {infoItems.map(({ icon: Icon, label, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-6 text-black transition transform hover:scale-105 hover:bg-white/10 rounded-3xl md:rounded-none cursor-pointer"
              >
                {/* Icon inside circle */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 group-hover:bg-white/30 transition">
                  <Icon className="w-6 h-6 text-aqua" />
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-lg font-bold">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-2 mt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Left side */}
          <div className="flex items-center gap-2 text-white-600">
            <a href="#" className="hover:text-cyan-400">
              Terms & Conditions
            </a>
            <span className="text-white-400">|</span>
            <a href="#" className="hover:text-cyan-400">
              Privacy Policy
            </a>
          </div>

          {/* Right side */}
          <div className="text-white mt-2 md:mt-0 hover:text-cyan-400">
            Designed by{" "}
            <span className="text-white-600 font-semibold">AcmeInfolabs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
