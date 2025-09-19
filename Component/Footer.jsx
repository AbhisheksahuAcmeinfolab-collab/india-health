import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import pic1 from "../assets/icon1.png";
import pic2 from "../assets/icon2.png";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";



export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo & About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Mediox</h2>
          <p className="mb-4 text-sm">
            Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum
            Dolor Sit Amet, Consecteture.
          </p>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-cyan-600 transition">
            GET CONSULTANT →
          </button>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-cyan-400">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400">Cardiology Care</li>
            <li className="hover:text-cyan-400">Urgent Care</li>
            <li className="hover:text-cyan-400">Orthopedic Care</li>
            <li className="hover:text-cyan-400">Neurology Care</li>
            <li className="hover:text-cyan-400">Gynaecologists</li>
            <li className="hover:text-cyan-400">Therapy</li>
            <li className="hover:text-cyan-400">Dental Service</li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400">About Us</li>
            <li className="hover:text-cyan-400">Our Services</li>
            <li className="hover:text-cyan-400">Our Team</li>
            <li className="hover:text-cyan-400">Latest Blog</li>
            <li className="hover:text-cyan-400">Appointments</li>
            <li className="hover:text-cyan-400">Help & FAQS</li>
            <li className="hover:text-cyan-400">Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Recent News */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            Recent News
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Image
                src={pic1}
                alt="News"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="hover:text-cyan-400">
                <p className="text-xs text-gray-400 hover:text-cyan-400">
                  By Admin • 2 comments
                </p>
                <h4 className="text-sm text-white hover:text-cyan-400 cursor-pointer">
                  Collaboratively Pontificate Bleedi Edge Resources
                </h4>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={pic2}
                alt="News"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <p className="text-xs text-gray-400 hover:text-cyan-400">
                  By Admin • 2 comments
                </p>
                <h4 className="text-sm text-white hover:text-cyan-400 cursor-pointer">
                  Quick Sync The Horse Is Out Of The Barn, Yet This Vendor
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-blue-900 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-2 hover:text-cyan-400">
            <MdLocationOn className="text-cyan-400 w-5 h-5" />
            <span>4648 Rocky Road Philadelphia PA, 1920</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400">
            <MdEmail className="text-cyan-400 w-5 h-5" />
            <span>info@mediox.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400">
            <MdPhone className="text-cyan-400 w-5 h-5" />
            <span>+208-555-0112</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
