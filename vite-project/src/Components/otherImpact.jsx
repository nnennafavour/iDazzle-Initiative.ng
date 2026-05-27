import React, { useState, useEffect } from 'react';
import seedhope1 from "../assets/seedhope1.jpeg";
import seedhope2 from "../assets/seedhope2.jpeg";
import seedhope3 from "../assets/seedhope3.jpeg";
import seedhope4 from "../assets/seedhope4.jpeg";

const images = [seedhope1, seedhope2, seedhope3, seedhope4];

const OtherImpact = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-full bg-gray-200 py-16">

      {/* SAME GLOBAL GRID AS HERO + NAVBAR */}
      <div className="w-full px-6 lg:px-12">

        <div className="flex flex-col md:flex-row items-stretch gap-10">

          {/* TEXT SIDE */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Skills & Practical Empowerment
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At <span className="font-semibold">Idazzle Initiative</span>, we focus on
              equipping individuals with practical skills that create real income opportunities
              and long-term independence. i love abacha and amala hhh
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Training includes soap making, baking, tailoring, crafts, and other hands-on
              activities that can be immediately applied in everyday life.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our goal is to help individuals turn simple skills into sustainable businesses
              that support families and strengthen communities.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-fit">
              Ignite Your Voice
            </button>

          </div>

          {/* IMAGE SLIDER SIDE */}
          <div className="md:w-1/2 flex">

            <div className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden">

              {/* Image */}
              <img
                src={images[current]}
                alt="impact"
                className="w-full h-full object-cover"
              />

              {/* Left Button */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200"
              >
                ◀
              </button>

              {/* Right Button */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200"
              >
                ▶
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default OtherImpact;