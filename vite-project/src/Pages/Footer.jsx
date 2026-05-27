// import React from "react";

// import {
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";

// const Footer = () => {
//   return (

//     <footer
//   id="contact"
//   className="mt-24 bg-black text-white pt-20 pb-10 px-6 lg:px-16"
// >

//       {/* TOP SECTION */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-14">

//         {/* ORGANIZATION INFO */}
//         <div>

//           <h2 className="text-3xl font-extrabold text-orange-500 mb-6">
//             iDazzle Initiative
//           </h2>

//           <p className="text-gray-300 leading-relaxed text-lg">
//             Building transformed leaders with purpose,
//             skills, and confidence through youth empowerment,
//             mentorship, education, and community impact programs.
//           </p>

//         </div>

//         {/* QUICK LINKS */}
//         <div>

//           <h3 className="text-2xl font-bold mb-6 text-white">
//             Quick Links
//           </h3>

//           <div className="flex flex-col gap-4 text-gray-300 text-lg">

//             <a
//               href="#home"
//               className="hover:text-orange-500 transition"
//             >
//               Home
//             </a>

//             <a
//               href="#about"
//               className="hover:text-orange-500 transition"
//             >
//               About Us
//             </a>

//             <a
//               href="#projects"
//               className="hover:text-orange-500 transition"
//             >
//               Projects
//             </a>

//             <a
//               href="#teams"
//               className="hover:text-orange-500 transition"
//             >
//               Teams
//             </a>

//             <a
//               href="#team"
//               className="hover:text-orange-500 transition"
//             >
//               Team Members
//             </a>

//           </div>

//         </div>

//         {/* CONTACT INFO */}
//         <div>

//           <h3 className="text-2xl font-bold mb-6 text-white">
//             Contact Us
//           </h3>

//           <div className="space-y-4 text-gray-300 text-lg">

//             <p>
//               Lagos, Nigeria
//             </p>

//             <p>
//               info@idazzleinitiative.org
//             </p>

//             <p>
//               +234 XXX XXX XXXX
//             </p>

//           </div>

//         </div>

//         {/* SOCIAL MEDIA */}
//         <div>

//           <h3 className="text-2xl font-bold mb-6 text-white">
//             Follow Us
//           </h3>

//           <p className="text-gray-300 text-lg leading-relaxed mb-6">
//             Stay connected with us through our social
//             media platforms and follow our impact stories,
//             programs, and community activities.
//           </p>

//           {/* ICONS */}
//           <div className="flex items-center gap-5">

//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
//             >
//               <FaInstagram className="text-xl" />
//             </a>

//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
//             >
//               <FaFacebookF className="text-xl" />
//             </a>

//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
//             >
//               <FaLinkedinIn className="text-xl" />
//             </a>

//             <a
//               href="https://youtube.com"
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
//             >
//               <FaYoutube className="text-xl" />
//             </a>

//             <a
//               href="https://tiktok.com"
//               target="_blank"
//               rel="noreferrer"
//               className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition duration-300"
//             >
//               <FaTiktok className="text-xl" />
//             </a>

//           </div>

//         </div>

//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="pt-8 text-center">

//         <p className="text-gray-400 text-lg">
//           © {new Date().getFullYear()} iDazzle Initiative.
//           All Rights Reserved.
//         </p>

//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (

    <footer
      id="footer"
      className="mt-24 bg-black text-white pt-20 pb-10 px-6 lg:px-16"
    >

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-14">

        {/* ORGANIZATION INFO */}
        <div>

          <h2 className="text-3xl font-extrabold text-orange-500 mb-6">
            iDazzle Initiative
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Building transformed leaders with purpose,
            skills, and confidence through youth empowerment,
            mentorship, education, and community impact programs.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-2xl font-bold mb-6 text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-300 text-lg">

            <a
              href="#home"
              className="hover:text-orange-500 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-orange-500 transition"
            >
              About Us
            </a>

            <a
              href="#projects"
              className="hover:text-orange-500 transition"
            >
              Projects
            </a>

            <a
              href="#teams"
              className="hover:text-orange-500 transition"
            >
              Teams
            </a>

            <a
              href="#contact"
              className="hover:text-orange-500 transition"
            >
              Contact Us
            </a>

            <a
              href="#donate"
              className="hover:text-orange-500 transition"
            >
              Donate
            </a>

          </div>

        </div>

        {/* CONTACT INFO */}
        <div>

          <h3 className="text-2xl font-bold mb-6 text-white">
            Contact Info
          </h3>

          <div className="space-y-4 text-gray-300 text-lg">

            <p>
              Peace Drive Estate,
              Port Harcourt,
              Rivers State, Nigeria
            </p>

            <p>
              idazzleinitiative@gmail.com
            </p>

            <p>
              +234 081 673 49610
            </p>

          </div>

        </div>

        {/* SOCIAL MEDIA */}
        <div>

          <h3 className="text-2xl font-bold mb-6 text-white">
            Connect With Us
          </h3>

          <div className="flex flex-col gap-5">

            {/* EMAIL */}
            <a
              href="mailto:idazzleinitiative@gmail.com"
              className="flex items-center gap-4 hover:text-orange-500 transition"
            >

              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-xl text-white" />
              </div>

              <span className="text-lg">
                idazzleinitiative@gmail.com
              </span>

            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-orange-500 transition"
            >

              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-xl text-white" />
              </div>

              <span className="text-lg">
                iDazzle Initiative
              </span>

            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/idazzle_initiative1/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-orange-500 transition"
            >

              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <FaInstagram className="text-xl text-white" />
              </div>

              <span className="text-lg">
                @idazzle_initiative1
              </span>

            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="pt-8 text-center">

        <p className="text-gray-400 text-lg">
          © {new Date().getFullYear()} iDazzle Initiative.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;