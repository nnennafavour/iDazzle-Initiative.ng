import React from "react";

import {
  FaUniversity,
  FaHeart,
  FaDonate,
} from "react-icons/fa";

const Donate = () => {
  return (

    <section
      id="donate"
      className="pt-32 px-6 lg:px-16 bg-gray-50"
    >

      {/* HEADER */}
      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Support <span className="text-orange-500">Our Mission</span>
        </h1>

        <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Your support helps us empower teenagers and young people
          through education, leadership development, mentorship,
          digital literacy, and life-transforming skill acquisition programs.
        </p>

      </div>

      {/* DONATION CONTAINER */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="bg-black rounded-3xl p-10 text-white shadow-2xl">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
              <FaHeart />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Donate Today
              </h2>

              <p className="text-gray-300">
                Every contribution creates impact.
              </p>
            </div>

          </div>

          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Your donations support outreach programs,
            youth empowerment projects, educational interventions,
            and community development initiatives carried out
            by iDazzle Initiative. 
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            We are currently in the process of registering iDazzle Initiative with the
            Corporate Affairs Commission (CAC) in Nigeria to become a fully recognized non-profit organization.
            Once the registration process is completed, we will officially open a corporate account for the
            organization. For now, the account details below are the dedicated account details for all
            iDazzle Initiative activities and trasactions. We assure you that all funds received will be used solely for the purpose of supporting
          </p>

          <div className="space-y-6">

            {/* ACCOUNT NAME */}
            <div className="bg-white/10 rounded-2xl p-5">

              <p className="text-gray-300 mb-2">
                Account Name
              </p>

              <h3 className="text-2xl font-bold">
                Chinenye Ogechi Onyebuchi
              </h3>

            </div>

            {/* ACCOUNT NUMBER */}
            <div className="bg-white/10 rounded-2xl p-5">

              <p className="text-gray-300 mb-2">
                Account Number
              </p>

              <h3 className="text-2xl font-bold tracking-wider">
               6709369812
              </h3>

            </div>

            {/* BANK */}
            <div className="bg-white/10 rounded-2xl p-5 flex items-center gap-4">

              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-xl">
                <FaUniversity />
              </div>

              <div>

                <p className="text-gray-300 mb-1">
                  Bank Name
                </p>

                <h3 className="text-2xl font-bold">
                  Moniepoint MFB Bank
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl mb-8">
            <FaDonate />
          </div>

          <h2 className="text-3xl font-bold text-black mb-6">
            Why Your Support Matters
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At iDazzle Initiative, we believe every young person
            deserves access to opportunities, mentorship,
            education, and practical skills that can transform their future.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Through your generous support, we are able to organize
            impactful programs like Skill-A-Teen, iDazzleGirl,
            Project SHINE, educational outreaches,
            and youth leadership initiatives.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Every donation, no matter the size,
            helps us reach more communities,
            empower more teenagers,
            and create lasting change.
          </p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-4 rounded-2xl text-lg font-semibold">
            Thank You For Supporting Us
          </button>

        </div>

      </div>

    </section>
  );
};

export default Donate;