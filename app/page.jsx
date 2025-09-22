"use client";
import React from "react";
import {
  FaHospital,
  FaUserMd,
  FaCalendarAlt,
  FaStethoscope,
  FaCheckSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { HeartHandshake, ShieldCheck, Handshake } from "lucide-react";
import pic1 from "../assets/image/front1.png";
import pic2 from "../assets/image/front2.png";
import pic3 from "../assets/image/front3.png";
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

export default function HomePage() {
  const slides = [
    {
      title: "Best Brain Cancer",
      subtitle: "Treatments in India",
      desc: "We Care for you.",
      img: pic1,
    },
    {
      title: "World-Class",
      subtitle: "Medical Facilities",
      desc: "Get treatment from top hospitals in India.",
      img: pic2,
    },
    {
      title: "Trusted by Patients",
      subtitle: "Across the Globe",
      desc: "Safe, reliable, and affordable healthcare solutions.",
      img: pic3,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* ================= HERO CAROUSEL ================= */}
      <section className="w-full relative">
        {/* Custom Arrows */}
        <div
          className="swiper-button-prev !text-gray-800 !bg-white hover:!bg-gray-200 
          !rounded-full !w-8 !h-8 flex items-center justify-center 
          shadow-md absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
        >
          <FaChevronLeft size={14} />
        </div>

        <div
          className="swiper-button-next !text-gray-800 !bg-white hover:!bg-gray-200 
          !rounded-full !w-8 !h-8 flex items-center justify-center 
          shadow-md absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
        >
          <FaChevronRight size={14} />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[70vh] sm:h-[80vh] flex items-center">
                <Image
                  src={slide.img}
                  alt="Doctor"
                  fill
                  className="absolute object-cover"
                  priority
                />
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 text-center md:text-left">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
                    <span className="text-blue-600">{slide.title}</span>
                    <br />
                    <span>{slide.subtitle}</span>
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
                    {slide.desc}
                  </p>
                  <button className="mt-4 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded shadow hover:bg-blue-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= ICONS ================= */}
      <section className="container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          {
            icon: <FaStethoscope className="text-blue-600 text-4xl mb-3" />,
            label: "Treatments",
          },
          {
            icon: <FaHospital className="text-red-600 text-4xl mb-3" />,
            label: "Top Hospitals",
          },
          {
            icon: <FaUserMd className="text-green-600 text-4xl mb-3" />,
            label: "Top Doctors",
          },
          {
            icon: <FaCalendarAlt className="text-pink-600 text-4xl mb-3" />,
            label: "Appointments",
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            {item.icon}
            <h3 className="text-sm sm:text-base font-semibold text-blue-700">
              {item.label}
            </h3>
          </div>
        ))}
      </section>

      <div className="font-sans text-gray-800">
        {/* ================= WELCOME SECTION ================= */}
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
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import {
//   FaHospital,
//   FaUserMd,
//   FaCalendarAlt,
//   FaStethoscope,
//   FaCheckSquare,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Image from "next/image";

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

//   const testimonials = [
//     {
//       text: "Recently, my husband had kidney transplant surgery. Thanks to IHA and their medical staff, the procedure was successful. We are forever grateful.",
//       name: "Lilian Jones",
//     },
//     {
//       text: "I had an excellent experience with IHA. They made my medical journey stress-free and guided me at every step.",
//       name: "Rahul Mehta",
//     },
//     {
//       text: "Thanks to IHA, my father received world-class treatment. The support and transparency were exceptional.",
//       name: "Sophia Brown",
//     },
//   ];

//   const whyChoose = [
//     "Comprehensive Services",
//     "Accredited Medical Facilities",
//     "Expertise and Experience",
//     "Personalized Care",
//     "Cost-Effective Solutions",
//     "Multilingual Support",
//     "High Patient Satisfaction",
//     "Safety and Compliance",
//   ];

//   const cards = [
//     { title: "Atherectomy Surgery", img: pic6 },
//     { title: "Hemangioblastoma", img: pic7 },
//     { title: "Multiple Myeloma", img: pic8 },
//     { title: "Astrocytoma Treatment", img: pic9 },
//     { title: "Neurology & Neurosurgery", img: pic10 },
//     { title: "Orthopedics", img: pic11 },
//     { title: "Hematology", img: pic12 },
//     { title: "Cancer & Cancer Surgery", img: pic13 },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
//       {/* ================= HERO CAROUSEL ================= */}
//       <section className="w-full relative">
//         {/* Custom Arrows */}
//         <div
//           className="swiper-button-prev !text-gray-800 !bg-white hover:!bg-gray-200
//           !rounded-full !w-8 !h-8 flex items-center justify-center
//           shadow-md absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
//         >
//           <FaChevronLeft size={14} />
//         </div>

//         <div
//           className="swiper-button-next !text-gray-800 !bg-white hover:!bg-gray-200
//           !rounded-full !w-8 !h-8 flex items-center justify-center
//           shadow-md absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
//         >
//           <FaChevronRight size={14} />
//         </div>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           loop
//           className="w-full"
//         >
//           {slides.map((slide, i) => (
//             <SwiperSlide key={i}>
//               <div className="relative h-[70vh] sm:h-[80vh] flex items-center">
//                 <Image
//                   src={slide.img}
//                   alt="Doctor"
//                   fill
//                   className="absolute object-cover"
//                   priority
//                 />
//                 <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 text-center md:text-left">
//                   <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
//                     <span className="text-blue-600">{slide.title}</span>
//                     <br />
//                     <span>{slide.subtitle}</span>
//                   </h2>
//                   <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">
//                     {slide.desc}
//                   </p>
//                   <button className="mt-4 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded shadow hover:bg-blue-700 transition">
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* ================= ICONS ================= */}
//       <section className="container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
//         {[
//           {
//             icon: <FaStethoscope className="text-blue-600 text-4xl mb-3" />,
//             label: "Treatments",
//           },
//           {
//             icon: <FaHospital className="text-red-600 text-4xl mb-3" />,
//             label: "Top Hospitals",
//           },
//           {
//             icon: <FaUserMd className="text-green-600 text-4xl mb-3" />,
//             label: "Top Doctors",
//           },
//           {
//             icon: <FaCalendarAlt className="text-pink-600 text-4xl mb-3" />,
//             label: "Appointments",
//           },
//         ].map((item, i) => (
//           <div key={i} className="flex flex-col items-center">
//             {item.icon}
//             <h3 className="text-sm sm:text-base font-semibold text-blue-700">
//               {item.label}
//             </h3>
//           </div>
//         ))}
//       </section>

//       <div className="font-sans text-gray-800">
//         {/* ================= WELCOME SECTION ================= */}
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
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                   {["Compassion", "Responsibility", "Trustworthiness"].map(
//                     (val, i) => (
//                       <div
//                         key={i}
//                         className="flex flex-col items-center text-center"
//                       >
//                         <div className="bg-blue-100 p-4 rounded-full">
//                           <svg
//                             className="w-8 h-8 text-blue-600"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M12 21.35l-1.45-1.32C5.4 15.36...z" />
//                           </svg>
//                         </div>
//                         <p className="mt-2 font-semibold text-blue-800">
//                           {val}
//                         </p>
//                       </div>
//                     )
//                   )}
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
//         <section className="bg-blue-700 py-12">
//           <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-4">
//                 Why Choose us
//               </h2>
//               <ul className="space-y-3">
//                 {whyChoose.map((point, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <FaCheckSquare className="text-white text-xl" />
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button className="mt-6 bg-white text-blue-700 px-5 py-2 rounded shadow hover:bg-gray-200 transition">
//                 Read More
//               </button>
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src={pic5}
//                 alt="Doctor Consultation"
//                 className="w-full max-w-md"
//               />
//             </div>
//           </div>
//         </section>

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
//     </div>
//   );
// }
