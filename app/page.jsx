"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake, ShieldCheck, Handshake } from "lucide-react";
import { FaCheckSquare } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import pic1 from "../assets/newimage/brain.png";
import pic2 from "../assets/newimage/treat.png";
import pic3 from "../assets/newimage/trust.png";
import pic4 from "../assets/image/front4.png";
import pic5 from "../assets/image/front5.png";
import pic6 from "../assets/image/A.png";
import pic7 from "../assets/image/B.png";
import pic8 from "../assets/image/C.png";
import pic9 from "../assets/image/D.png";
import pic10 from "../assets/image/E.png";
import pic11 from "../assets/image/F.png";
import pic12 from "../assets/image/G.png";
import pic13 from "../assets/image/H.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: pic1,
    subtitle: "24/7 EMERGENCY SERVICE",
    title: "Best Dental Care in Town",
    desc: "From annual physicals to lab work and vaccinations, and all steps in between, Vivo Clinic patients can get all",
  },
  {
    img: pic2,
    subtitle: "CARING FOR SMILES",
    title: "Your Health, Our Priority",
    desc: "Experience world-class treatment with our expert doctors and modern facilities.",
  },
  {
    img: pic3,
    subtitle: "ADVANCED EQUIPMENT",
    title: "Where Technology Meets Care",
    desc: "We provide painless treatments with the latest technology for your comfort.",
  },
];

const values = [
  {
    title: "Compassion",
    icon: <HeartHandshake className="w-10 h-10 text-pink-600" />,
    desc: "We care deeply for every individual we serve.",
  },
  {
    title: "Responsibility",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    desc: "We act with integrity and accountability in all we do.",
  },
  {
    title: "Trustworthiness",
    icon: <Handshake className="w-10 h-10 text-green-600" />,
    desc: "We build relationships on honesty and reliability.",
  },
];

const testimonials = [
  {
    text: "Recently, my husband had kidney transplant surgery. Thanks to IHA and their medical staff, the procedure was successful. We are forever grateful.",
    name: "Lilian Jones",
  },
  {
    text: "I had an excellent experience with IHA. They made my medical journey stress-free and guided me at every step.",
    name: "Rahul Mehta",
  },
  {
    text: "Thanks to IHA, my father received world-class treatment. The support and transparency were exceptional.",
    name: "Sophia Brown",
  },
];

const whyChoose = [
  "Comprehensive Services",
  "Accredited Medical Facilities",
  "Expertise and Experience",
  "Personalized Care",
  "Cost-Effective Solutions",
  "Multilingual Support",
  "High Patient Satisfaction",
  "Safety and Compliance",
];

const cards = [
  { title: "Atherectomy Surgery", img: pic6 },
  { title: "Hemangioblastoma", img: pic7 },
  { title: "Multiple Myeloma", img: pic8 },
  { title: "Astrocytoma Treatment", img: pic9 },
  { title: "Neurology & Neurosurgery", img: pic10 },
  { title: "Orthopedics", img: pic11 },
  { title: "Hematology", img: pic12 },
  { title: "Cancer & Cancer Surgery", img: pic13 },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom-out */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].img}
                alt={slides[current].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-600/30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-content"}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.2, y: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.p
                className="uppercase text-sm md:text-base tracking-[0.3em] text-cyan-300 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slides[current].subtitle}
              </motion.p>

              {/* Title Zoom-In */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 leading-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                className="mt-4 text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {slides[current].desc}
              </motion.p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
                >
                  Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-cyan-600 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex gap-3 justify-center w-full z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-cyan-400 scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <div className="font-sans text-gray-800">
        <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Left */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                Welcome to Indian Health Adviser
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Indian Health Adviser (IHA) is one of the most reputable medical
                travel facilitators in India...
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We focus on patient needs by coordinating with top Indian
                hospitals to ensure the most advanced and cost-effective
                treatment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our vision is to be recognized as the world’s most trustworthy
                and empathetic healthcare management company.
              </p>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-blue-800 mb-4">
                  Our Core Values
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {values.map((val, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition duration-300"
                    >
                      <div className="bg-blue-50 p-6 rounded-full flex items-center justify-center shadow-inner">
                        {val.icon}
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-blue-800">
                        {val.title}
                      </h3>
                      {/* <p className="mt-2 text-gray-600">{val.desc}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="md:w-1/2">
              <Image
                src={pic4}
                alt="Doctor and Patient"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-blue-700 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose us
            </h2>
            <ul className="space-y-3">
              {whyChoose.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckSquare className="text-white text-xl" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-white text-blue-700 px-5 py-2 rounded shadow hover:bg-gray-200 transition">
              Read More
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src={pic5}
              alt="Doctor Consultation"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Featured Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={200}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm sm:text-lg font-semibold">
                  {card.title}
                </h3>
                <button className="mt-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
            What Our Clients Say
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="max-w-xl mx-auto"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-50 shadow-md rounded-lg p-6 sm:p-8 text-center">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <h4 className="mt-4 font-semibold text-gray-800">
                    {item.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
    </main>
  );
}

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { HeartHandshake, ShieldCheck, Handshake } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaCheckSquare} from "react-icons/fa";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import pic1 from "../assets/image/front1.png";
// import pic2 from "../assets/image/front2.png";
// import pic3 from "../assets/image/front3.png";
// import pic4 from "../assets/image/front4.png";
// import pic5 from "../assets/image/front5.png";
// import pic6 from "../assets/image/A.png";
// import pic7 from "../assets/image/B.png";
// import pic8 from "../assets/image/C.png";
// import pic9 from "../assets/image/D.png";
// import pic10 from "../assets/image/E.png";
// import pic11 from "../assets/image/F.png";
// import pic12 from "../assets/image/G.png";
// import pic13 from "../assets/image/H.png";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function HomePage() {
//   const slides = [
//     {
//       title: "Best Brain Cancer",
//       subtitle: "Treatments in India",
//       desc: "We Care for you.",
//       img: pic1,
//     },
//     {
//       title: "World-Class",
//       subtitle: "Medical Facilities",
//       desc: "Get treatment from top hospitals in India.",
//       img: pic2,
//     },
//     {
//       title: "Trusted by Patients",
//       subtitle: "Across the Globe",
//       desc: "Safe, reliable, and affordable healthcare solutions.",
//       img: pic3,
//     },
//   ];

// const values = [
//   {
//     title: "Compassion",
//     icon: <HeartHandshake className="w-10 h-10 text-pink-600" />,
//     desc: "We care deeply for every individual we serve.",
//   },
//   {
//     title: "Responsibility",
//     icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
//     desc: "We act with integrity and accountability in all we do.",
//   },
//   {
//     title: "Trustworthiness",
//     icon: <Handshake className="w-10 h-10 text-green-600" />,
//     desc: "We build relationships on honesty and reliability.",
//   },
// ];

// const testimonials = [
//   {
//     text: "Recently, my husband had kidney transplant surgery. Thanks to IHA and their medical staff, the procedure was successful. We are forever grateful.",
//     name: "Lilian Jones",
//   },
//   {
//     text: "I had an excellent experience with IHA. They made my medical journey stress-free and guided me at every step.",
//     name: "Rahul Mehta",
//   },
//   {
//     text: "Thanks to IHA, my father received world-class treatment. The support and transparency were exceptional.",
//     name: "Sophia Brown",
//   },
// ];

// const whyChoose = [
//   "Comprehensive Services",
//   "Accredited Medical Facilities",
//   "Expertise and Experience",
//   "Personalized Care",
//   "Cost-Effective Solutions",
//   "Multilingual Support",
//   "High Patient Satisfaction",
//   "Safety and Compliance",
// ];

// const cards = [
//   { title: "Atherectomy Surgery", img: pic6 },
//   { title: "Hemangioblastoma", img: pic7 },
//   { title: "Multiple Myeloma", img: pic8 },
//   { title: "Astrocytoma Treatment", img: pic9 },
//   { title: "Neurology & Neurosurgery", img: pic10 },
//   { title: "Orthopedics", img: pic11 },
//   { title: "Hematology", img: pic12 },
//   { title: "Cancer & Cancer Surgery", img: pic13 },
// ];

// const [current, setCurrent] = useState(0);

// // Auto-slide every 5 seconds
// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   }, 5000);
//   return () => clearInterval(interval);
// }, [slides.length]);

//   return (
//     <main>
//       <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
//         {/* Background Images */}
//         <div className="absolute inset-0">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, scale: 1.1 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 1 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={slides[current].img}
//                 alt={slides[current].title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/40" />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Text Content */}
//         <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current + "-content"}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.8 }}
//             >
//               <p className="uppercase text-sm md:text-base tracking-widest text-cyan-400 font-semibold">
//                 {slides[current].subtitle}
//               </p>

//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 leading-tight drop-shadow-lg">
//                 {slides[current].title}
//               </h1>

//               <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium">
//                 {slides[current].desc}
//               </p>

//               <div className="mt-8 flex justify-center gap-4 flex-wrap">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
//                 >
//                   Book Appointment
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   className="bg-white hover:bg-gray-100 text-cyan-600 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
//                 >
//                   Learn More
//                 </motion.button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Slide indicators */}
//         <div className="absolute bottom-8 flex gap-3 justify-center w-full z-20">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 i === current ? "bg-cyan-400 scale-125" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ================= WELCOME SECTION ================= */}
//       <div className="font-sans text-gray-800">
//         <div className="bg-blue-50 min-h-screen py-12 px-6 md:px-20">
//           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
//             {/* Left */}
//             <div className="md:w-1/2">
//               <h1 className="text-4xl font-bold text-blue-900 mb-4">
//                 Welcome to Indian Health Adviser
//               </h1>
//               <p className="text-lg text-gray-700 mb-4">
//                 Indian Health Adviser (IHA) is one of the most reputable medical
//                 travel facilitators in India...
//               </p>
//               <p className="text-lg text-gray-700 mb-4">
//                 We focus on patient needs by coordinating with top Indian
//                 hospitals to ensure the most advanced and cost-effective
//                 treatment.
//               </p>
//               <p className="text-lg text-gray-700 mb-6">
//                 Our vision is to be recognized as the world’s most trustworthy
//                 and empathetic healthcare management company.
//               </p>

//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold text-blue-800 mb-4">
//                   Our Core Values
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                   {values.map((val, i) => (
//                     <div
//                       key={i}
//                       className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition duration-300"
//                     >
//                       <div className="bg-blue-50 p-6 rounded-full flex items-center justify-center shadow-inner">
//                         {val.icon}
//                       </div>
//                       <h3 className="mt-4 text-xl font-semibold text-blue-800">
//                         {val.title}
//                       </h3>
//                       {/* <p className="mt-2 text-gray-600">{val.desc}</p> */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right */}
//             <div className="md:w-1/2">
//               <Image
//                 src={pic4}
//                 alt="Doctor and Patient"
//                 className="rounded-lg shadow-md w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ================= WHY CHOOSE US ================= */}
// <section className="bg-blue-700 py-12">
//   <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
//     <div>
//       <h2 className="text-2xl md:text-3xl font-bold mb-4">
//         Why Choose us
//       </h2>
//       <ul className="space-y-3">
//         {whyChoose.map((point, i) => (
//           <li key={i} className="flex items-center gap-3">
//             <FaCheckSquare className="text-white text-xl" />
//             <span>{point}</span>
//           </li>
//         ))}
//       </ul>
//       <button className="mt-6 bg-white text-blue-700 px-5 py-2 rounded shadow hover:bg-gray-200 transition">
//         Read More
//       </button>
//     </div>
//     <div className="flex justify-center">
//       <Image
//         src={pic5}
//         alt="Doctor Consultation"
//         className="w-full max-w-md"
//       />
//     </div>
//   </div>
// </section>

//         {/* ================= SERVICES ================= */}
//         <div className="container mx-auto px-4 sm:px-6 py-12">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
//             Featured Services
//           </h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {cards.map((card, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
//               >
//                 <Image
//                   src={card.img}
//                   alt={card.title}
//                   width={400}
//                   height={200}
//                   className="w-full h-40 sm:h-48 object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-sm sm:text-lg font-semibold">
//                     {card.title}
//                   </h3>
//                   <button className="mt-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= TESTIMONIALS ================= */}
//         <section className="py-12 bg-white">
//           <div className="container mx-auto px-4 sm:px-6">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
//               What Our Clients Say
//             </h2>
//             <Swiper
//               modules={[Pagination, Autoplay]}
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 4000 }}
//               loop
//               className="max-w-xl mx-auto"
//             >
//               {testimonials.map((item, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="bg-gray-50 shadow-md rounded-lg p-6 sm:p-8 text-center">
//                     <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
//                       {item.text}
//                     </p>
//                     <h4 className="mt-4 font-semibold text-gray-800">
//                       {item.name}
//                     </h4>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
