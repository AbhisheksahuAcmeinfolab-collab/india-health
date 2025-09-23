"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import Img1 from "../../assets/hero.png";
import Img2 from "../../assets/image/female.jpg";

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState(0);
  const services = [
    "Cost projections for the planned treatments and surgeries",
    "All medical appointments are scheduled",
    "Organizing the admissions procedure",
    "Processing of second opinions obtained from doctors",
    "Assistance with visa and travel preparations",
    "Reservations at hotels or serviced residences for a comfortable stay in India",
    "Planning for dietary restrictions",
    "Language translators",
    "Updating the patient’s relatives about their condition",
    "Religious settings",
    "Telemedicine is used for remote consultation",
    "Visiting the local attractions",
  ];

  const items = [
    {
      title: "Comprehensive Treatment Plan",
      content:
        "We provide you with thorough facts about your medical condition, a cost estimate, your doctor, and the hospital so you can make an informed decision.",
    },
    {
      title: "Medical Visa Support",
      content:
        "Guidance and assistance in obtaining the required medical visa quickly and efficiently.",
    },
    {
      title: "Airport Pickup And Drop-Off",
      content:
        "Safe and convenient transport arrangements from airport to hospital and back.",
    },
    {
      title: "Individual Attention And Care",
      content:
        "Personalized care tailored to your medical and personal needs during your stay.",
    },
    {
      title: "Kindness-Based Recovery",
      content:
        "A compassionate healing environment that promotes mental and physical well-being.",
    },
    {
      title: "Hospitality",
      content:
        "Comfortable accommodation options and hospitality services for patients and families.",
    },
    {
      title: "Communication Support",
      content:
        "Assistance in connecting with doctors, hospitals, and loved ones at all times.",
    },
    {
      title: "Translation Of Languages",
      content:
        "Language translators available to ensure smooth communication during your treatment.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 lg:px-20 py-16 gap-10">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg text-blue-600 font-semibold tracking-wide uppercase">
            About Us
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug mt-2">
            &quot;UNLOCKING THE SECRETS <br className="hidden md:block" />
            <span className="text-green-600">TO HOLISTIC HEALTH&quot;</span>
          </h1>

          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug mt-2">
            "UNLOCKING THE SECRETS <br className="hidden md:block" />
            <span className="text-green-600">TO HOLISTIC HEALTH"</span>
          </h1> */}
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            We are dedicated to providing world-class healthcare with
            compassion, innovation, and trust. Our mission is to guide
            individuals toward a healthier, holistic lifestyle through expertise
            and care.
          </p>
          <button className="mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative flex justify-center md:justify-end">
          <div className="relative w-72 md:w-96 lg:w-[420px]">
            <Image
              src={Img1}
              alt="Doctor"
              className="rounded-lg object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="py-4">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-4 border-dotted border-blue-300 rounded-full opacity-40 hidden md:block" />
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-green-200 rounded-full opacity-30 hidden md:block" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <div className="relative w-[320px] md:w-[420px] lg:w-[480px]">
              <Image
                src={Img2} // 👈 place your image in /public
                alt="Doctor"
                width={480}
                height={480}
                className="rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Text + Services */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-blue-800">
                Indian Health Advisers
              </span>
              &nbsp;is a healthcare facilitator seeking to make health and
              wellness easier for people, including international residents,
              their families, and their friends.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              You can find many resources with just one search, including
              medical facilities, alternative medicine proponents, surgeries,
              treatments, and more.
            </p>

            <h2 className="mt-6 text-2xl font-bold text-blue-800">
              Indian Health Advisers Offers Our Clients The Following Services:
            </h2>

            <ul className="mt-6 grid gap-3 text-gray-700">
              {services.map((service, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">▶</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Why Us
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          As your travel partner for medical care, Indian Health Advisers
          provide a wide range of services from the state you choose to visit
          for treatment till you return home in good health. Our only goal is to
          give you a comfortable setting where you may heal in the best
          condition possible.
        </p>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-blue-50 transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.title}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600 bg-white animate-fadeIn">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
