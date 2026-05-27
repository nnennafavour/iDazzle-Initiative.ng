import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (

    <section
      id="contact"
      className="pt-32 px-6 lg:px-16 bg-gray-50"
    >

      {/* HEADER */}
      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Contact <span className="text-orange-500">Us</span>
        </h1>

        <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          We would love to hear from you.
          Reach out to us for partnerships, collaborations,
          volunteering, sponsorship, or general inquiries.
        </p>

      </div>

      {/* CONTACT CONTAINER */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-3xl font-bold text-black mb-10">
            Get In Touch
          </h2>

          {/* PHONE */}
          <div className="flex items-start gap-5 mb-8">

            <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-1">
                Phone Number
              </h3>

              <p className="text-gray-600 text-lg">
                +234 081 673 49610
              </p>
              <p className="text-gray-600 text-lg">
                +234 090 496 08513
              </p>
            </div>

          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-5 mb-8">

            <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-1">
                Email Address
              </h3>

              <p className="text-gray-600 text-lg">
                idazzleinitiative@gmail.com
              </p>
            </div>

          </div>

          {/* ADDRESS */}
          <div className="flex items-start gap-5 mb-8">

            <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-1">
                Office Address
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Peace Drive Estate, Portharcourt, Rivers State, Nigeria
              </p>
            </div>

          </div>

          {/* SOCIALS */}
          {/* SOCIALS */}
<div className="mt-12">

  <h3 className="text-2xl font-bold text-black mb-6">
    Follow Us
  </h3>

  <div className="flex items-center gap-6 flex-wrap">

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/idazzle_initiative1/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 bg-white shadow-md px-5 py-3 rounded-2xl hover:shadow-xl transition duration-300"
    >

      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl">
        <FaInstagram />
      </div>

      <div>
        <p className="font-bold text-black">
          Instagram
        </p>

        <p className="text-gray-600 text-sm">
          @idazzle_initiative1
        </p>
      </div>

    </a>

    {/* FACEBOOK */}
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 bg-white shadow-md px-5 py-3 rounded-2xl hover:shadow-xl transition duration-300"
    >

      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl">
        <FaFacebookF />
      </div>

      <div>
        <p className="font-bold text-black">
          Facebook
        </p>

        <p className="text-gray-600 text-sm">
          iDazzle Initiative
        </p>
      </div>

    </a>

  </div>

</div>

        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="bg-black rounded-3xl shadow-lg p-10">

          <h2 className="text-3xl font-bold text-white mb-10">
            Send Us A Message
          </h2>

          <form className="space-y-6">

            {/* NAME */}
            <div>

              <label className="block text-white mb-2 text-lg">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-white mb-2 text-lg">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-white text-black outline-none"
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block text-white mb-2 text-lg">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl bg-white text-black outline-none resize-none"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;