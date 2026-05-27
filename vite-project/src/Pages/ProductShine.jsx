import React from "react";
import PShine1 from "../assets/PShine1.png";
import PShine2 from "../assets/PShine2.png";
import PShine3 from "../assets/PShine3.png";
import PShine4 from "../assets/PShine4.png";
import PShine5 from "../assets/PShine5.png";
import PShine6 from "../assets/PShine6.jpg";
import PShine7 from "../assets/PShine7.png";
import PShine8 from "../assets/PShine8.png";
import PShine9 from "../assets/PShine9.png";
import PShine10 from "../assets/PShine10.png";
import PShine11 from "../assets/PShine11.png";

const ProductShine = () => {
  return (

    <div className="pt-32 px-6 lg:px-16 bg-gray-100 min-h-screen">

      {/* TITLE */}
      <div className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Product Shine
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Reaching underserved communities through
          impactful outreach and support initiatives.
        </p>

      </div>

      {/* MAIN IMAGE */}
      <div className="w-full h-[300px] md:h-[500px] bg-gray-300 rounded-2xl mb-12 flex items-center justify-center">

        
          <img
                    src={PShine1}
                    alt="Main Project Image"
                    className="h-full w-full object-cover"
                  />
          <p className="text-2xl text-gray-600">
        </p>

      </div>

      {/* DETAILS */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-14">

        <h2 className="text-3xl font-bold text-black mb-6">
          About This Outreach
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Project SHINE (Strength, Hope, Identity, Nurturing & Empowerment) Concept Note: Project SHINE is a school-based outreach designed to empower teens in both urban and rural secondary schools with emotional intelligence, self-worth awareness, and peer mentorship tools. It targets students 
          aged 13–17 and will run in partnership with school authorities and community leaders.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          The project provides assistance, guidance,
          and development opportunities to children,
          teenagers, and families in need.
        </p>

      </div>

      {/* GALLERY */}
      <div>

        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Outreach Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine2}
                         alt="Gallery Image 2"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine3}
                         alt="Gallery Image 3"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine4}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>


        <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine5}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine6}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine7}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine8}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>

          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine9}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>

          
          <div className="h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
            <img
                         src={PShine10}
                         alt="Gallery Image 4"
                         className="h-full w-full object-cover"
                       />
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductShine;