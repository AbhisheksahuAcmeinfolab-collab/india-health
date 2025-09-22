
"use client";
import Image from "next/image";
import pic1 from "../../assets/icon/1.png"; 
import pic2 from "../../assets/icon/2.png";
import pic3 from "../../assets/icon/3.png"; 

export default function AyurvedaTreatments() {
  const treatments = [
    [
      "Udvartthanam",
      "Navarakizhi",
      "Elakizhi",
      "Thalapothichil",
      "Pizhichil",
      "Thalam",
      "Lepanam",
      "Abhyangam",
    ],
    [
      "Shirodhara",
      "Panchakarma",
      "Psoriasis Treatment",
      "Kati Vasti",
      "Potli Massage",
      "Ubtan Treatment",
      "Kashayadhara",
      "Nasya Treatment",
    ],
    [
      "Migraine Treatment",
      "Varicose",
      "Spine & Joint Care Treatment",
      "Chronic Back Pain",
      "Hypertension Treatment",
      "Skin Diseases Treatment",
      "Diabetes",
    ],
  ];

const cancerTreatments = [
  [
  "Rhabdomyosarcoma Treatment",
  "Robotic Prostate Cancer Surgery",
  "Pancreatic Cancer Treatment",
  "Ovarian Cancer Treatment",
  "Oral Cancer Treatment",
  "Liver Cancer",
  "Brain Cancer (Tumour) Treatment",
  "Prostate Cancer",
  "Anal Cancer",
  "Uterine Cancer",
  ],
  [
  "Cervical Cancer",
  "Gastrointestinal Cancer",
  "Breast Cancer",
  "Head And Neck Cancer",
  "Lung Cancer",
  "Blood Cancer",
  "Thyroid Cancer",
  "Bladder Cancer",
  "Esophagus Cancer",
  "Penile Cancer",
  ],
  [
  "Vulvar Cancer",
  "Primary Bone Cancer",
  "Vaginal Cancer",
  "Bone Cancer",
  "Skin Cancer",
  "Colon Cancer",
  "Gallbladder Cancer",
  "Salivary Cancer",
  "Bile Duct Cancer",
  "Nasopharyngeal Cancer",
  ],
];

   const hearttreatments = [
    [
    "Heart Transplant",
    "Heart Diseases",
    "Endovascular Aneurysm Repair",
    "Coronary Heart Diseases",
    ],
    [
    "Coronary Angioplasty",
    "Heart Bypass Surgery",
    "Heart Valve Surgery",
    ],
    [
    "Paediatric Heart Surgery",
    "Robotic Heart Surgery",
    "Pacemaker Implantation",
    ],
  ];

  return (
    <section>
      <div className="py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <Image src={pic1} alt="Ayurveda Icon" width={50} height={50} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Ayurveda Treatments
            </h2>
          </div>

          {/* List in columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
            {treatments.map((column, i) => (
              <ul key={i} className="space-y-2">
                {column.map((item, j) => (
                  <li
                    key={j}
                    className="text-blue-600 hover:text-red-800 cursor-pointer transition"
                  >
                     <a href="https://dictionary.cambridge.org/dictionary/english/treatment" className="text-sm md:text-base">
                    • {item}
                  </a>
                    {/* • {item} */}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <Image src={pic2} alt="Cancer Icon" width={50} height={50} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Cancer Treatments
            </h2>
          </div>

          {/* List in columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
            {cancerTreatments.map((column, i) => (
              <ul key={i} className="space-y-2">
                {column.map((item, j) => (
                  <li
                    key={j}
                    className="text-blue-600 hover:text-red-800 cursor-pointer transition"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-2">
              <Image src={pic3} alt="Ayurveda Icon" width={50} height={50} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Heart Treatments
            </h2>
          </div>

          {/* List in columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
            {hearttreatments.map((column, i) => (
              <ul key={i} className="space-y-2">
                {column.map((item, j) => (
                  <li
                    key={j}
                    className="text-blue-600 hover:text-red-800 cursor-pointer transition"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
