"use client";
import Image from "next/image";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";

export default function TopHeader() {
  return (
    <div className="bg-[#053161] text-white text-sm px-20 py-1" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-right md:gap-6 md-px-6 sm:px-2 lg:px-8">
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <span className="font-medium"> Call (+91) 9990205353 </span>
          <Image
            src={img3}
            alt="No"
            width={50}
            height={30}
            className="rounded-md"
          />
        </div>

        {/* Partner With Us */}
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <span className="font-medium"> Partner With Us </span>
          <Image
            src={img1}
            alt="No"
            width={30}
            height={20}
            className="rounded-md"
          />
        </div>

        {/* Get Free Quote */}
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <span className="font-medium"> Get Free Quote </span>
          <Image
            src={img2}
            alt="No"
            width={30}
            height={30}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}




















// "use client";
// import Image from "next/image";
// import img1 from "../assets/image/img1.png";
// import img2 from "../assets/image/img2.png";
// import img3 from "../assets/image/img3.png";

// export default function TopHeader() {
//   return (
//     <div className="bg-[#053161] text-white text-sm px-20 py-1" dir="rtl">
//       <div className="max-w-7xl mx-auto flex flex-wrap justify-right md:gap-6 md-px-6 sm:px-2 lg:px-8">
//         <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
//           <span className="font-medium">Call (+91) 9990205353</span>
//           <Image
//             src={img3}
//             alt="No"
//             width={50}
//             height={30}
//             className="rounded-md"
//           />
//         </div>

//         {/* Partner With Us */}
//         <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
//           <span className="font-medium"> Partner With Us</span>
//           <Image
//             src={img1}
//             alt="No"
//             width={30}
//             height={20}
//             className="rounded-md"
//           />
//         </div>

//         {/* Get Free Quote */}
//         <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
//           <span className="font-medium"> Get Free Quote</span>
//           <Image
//             src={img2}
//             alt="No"
//             width={30}
//             height={30}
//             className="rounded-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
