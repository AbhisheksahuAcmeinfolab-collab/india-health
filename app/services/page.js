"use client";
import Image from "next/image";

import {
  Stethoscope,
  HeartPulse,
  Microscope,
  Syringe,
  Hospital,
  Pill,
} from "lucide-react";
import pic1 from "../../assets/icon/1.png";
import pic2 from "../../assets/icon/2.png";
import pic3 from "../../assets/icon/3.png";
import pic4 from "../../assets/icon/1.png";
import pic5 from "../../assets/uses/3.png";
import pic6 from "../../assets/icon/2.png";
import pic7 from "../../assets/icon/3.png";
import pic8 from "../../assets/icon/1.png";
import pic9 from "../../assets/icon/2.png";

export default function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      title: "General Consultation",
      desc: "Comprehensive health checkups and expert medical advice tailored to your needs.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-green-600" />,
      title: "Cardiology",
      desc: "Advanced heart care with modern diagnostics and personalized treatment plans.",
    },
    {
      icon: <Microscope className="w-10 h-10 text-purple-600" />,
      title: "Diagnostics",
      desc: "Accurate lab testing and imaging services with cutting-edge equipment.",
    },
    {
      icon: <Syringe className="w-10 h-10 text-red-600" />,
      title: "Vaccination",
      desc: "Safe and effective immunization for all age groups to prevent major illnesses.",
    },
    {
      icon: <Hospital className="w-10 h-10 text-orange-600" />,
      title: "Emergency Care",
      desc: "24/7 emergency services to handle critical health conditions promptly.",
    },
    {
      icon: <Pill className="w-10 h-10 text-pink-600" />,
      title: "Pharmacy",
      desc: "On-site pharmacy providing genuine medicines and healthcare essentials.",
    },
  ];

  const helpItems = [
    {
      img: pic1, // put your image in public/icons/
      title: "Communications Support",
      desc: "To help you stay in touch with your loved ones back home, we will assist you in finding an activated telephone number from the local service provider. We can also help you acquire an internet dongle to continue accessing the internet and your email.",
    },
    {
      img: pic2,
      title: "Transportation",
      desc: "To make it simple for you to travel and navigate the city without difficulties, we will help you arrange a car for all of your local transfers inside the city. We’ll also recommend alternate, more convenient, and secure ways of transportation.",
    },
    {
      img: pic3,
      title: "Pickup At Airport",
      desc: "Following receipt of the patient’s travel schedule, our executive will arrange transport for you. They will meet you and any family members at the airport and assist you in reaching your final destination safely.",
    },
    {
      img: pic4,
      title: "Accommodation",
      desc: "We assist in finding suitable accommodations near the hospital or city center, ensuring comfort and convenience during your treatment stay.",
    },
    {
      img: pic5,
      width: 1000,
      height: 500,
      //   className={w-full h-72 object-cover rounded-lg},
      //   <div className="container">
      //     <img src="../../assets/uses/3.png" alt="Doctors team smiling" width="500" height="300" />
      // </div>
      //
      title: "Medical Assistance",
      desc: "Our healthcare team provides continuous support, ensuring your treatment and recovery process is smooth and stress-free.",
    },
    {
      img: pic6,
      title: "Dedicated Support",
      desc: "From start to finish, our team is available 24/7 to answer queries, provide guidance, and assist you with anything you need.",
    },
    {
      img: pic7, // put your image in public/icons/
      title: "Communications Support",
      desc: "To help you stay in touch with your loved ones back home, we will assist you in finding an activated telephone number from the local service provider. We can also help you acquire an internet dongle to continue accessing the internet and your email.",
    },
    {
      img: pic8,
      title: "Transportation",
      desc: "To make it simple for you to travel and navigate the city without difficulties, we will help you arrange a car for all of your local transfers inside the city. We’ll also recommend alternate, more convenient, and secure ways of transportation.",
    },
    {
      img: pic9,
      title: "Pickup At Airport",
      desc: "Following receipt of the patient’s travel schedule, our executive will arrange transport for you. They will meet you and any family members at the airport and assist you in reaching your final destination safely.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-20 bg-blue">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Providing world-class healthcare solutions with compassion,
          innovation, and expertise.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How We Can Help You
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <Image src={item.img} alt={item.title} width={60} height={60} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white py-12 px-6 md:px-12 lg:px-20 text-center mt-6">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Want to Schedule an Appointment?
            </h2>

            {/* Subheading */}
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-8">
              In a country known for world-class care and compassion, don’t get
              lost in the process. Start your healing with guidance you can
              trust.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition">
                Talk to Our Experts
              </button>
              <button className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg font-medium transition">
                Appointment Form
              </button>
            </div>

            {/* Footer Note */}
            <p className="mt-8 text-xs md:text-sm italic text-gray-300">
              No hidden charges. Just honest, personalised advice to make your
              medical trip to India safe and successful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
