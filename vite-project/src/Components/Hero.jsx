// import React, { useState, useEffect } from 'react';
// import seedhope1 from "../assets/seedhope1.jpeg";
// import seedhope2 from "../assets/seedhope2.jpeg";
// import seedhope3 from "../assets/seedhope3.jpeg";
// import seedhope4 from "../assets/seedhope4.jpeg";

// const images = [seedhope1, seedhope2, seedhope3, seedhope4];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   };

//   const nextSlide = () => {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   };

//   return (
//     <div className="w-full bg-gray-200 pt-32">

//       {/* SAME EXACT CONTAINER AS NAVBAR */}
//       <div className="w-full px-6 lg:px-12">

//         {/* SLIDER */}
//         <div className="h-[300px] md:h-[500px] relative overflow-hidden rounded-xl">

//           <img
//             src={images[current]}
//             alt="hero"
//             className="w-full h-full object-cover"
//           />

//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow"
//           >
//             ◀
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow"
//           >
//             ▶
//           </button>

//         </div>

//         <h2 className="py-6 text-2xl md:text-3xl font-extrabold text-center mb-8">
//             Our Impact
//           </h2>

//         {/* IMPACT SECTION */}
//         <div className="mt-10 bg-black text-white py-10 rounded-xl">

          

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

//             <div>
//               <h1 className="text-3xl font-bold">50K+</h1>
//               <p className="font-normal">Amount raised so far</p>
//             </div>

//             <div>
//               <h1 className="text-3xl font-bold">200K+</h1>
//               <p className="font-normal">Projects completed</p>
//             </div>

//             <div>
//               <h1 className="text-3xl font-bold">5K+</h1>
//               <p className="font-normal">People supported</p>
//             </div>

//             <div>
//               <h1 className="text-3xl font-bold">17K+</h1>
//               <p className="font-normal">Countries reached</p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import seedhope1 from "../assets/seedhope1.jpeg";
import seedhope2 from "../assets/seedhope2.jpeg";
import seedhope3 from "../assets/seedhope3.jpeg";
import seedhope4 from "../assets/seedhope4.jpeg";

const images = [seedhope1, seedhope2, seedhope3, seedhope4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

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

    <div id="home" className="w-full bg-gray-200 pt-32">

      {/* SAME EXACT CONTAINER AS NAVBAR */}
      <div className="w-full px-6 lg:px-12">

        {/* SLIDER */}
        <div className="h-[300px] md:h-[500px] relative overflow-hidden rounded-xl">

          <img
            src={images[current]}
            alt="hero"
            className="w-full h-full object-cover"
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow"
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow"
          >
            ▶
          </button>

        </div>

        {/* IMPACT TITLE */}
        <h2 className="py-6 text-2xl md:text-3xl font-extrabold text-center mb-8">
          Our Impact
        </h2>

        {/* IMPACT SECTION */}
        <div className="mt-10 bg-black text-white py-10 rounded-xl">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h1 className="text-3xl font-bold">2023</h1>
              <p className="font-normal">Year of Establishment </p>
            </div>

            <div>
              <h1 className="text-3xl font-bold">3K+</h1>
              <p className="font-normal">Total number of impact </p>
            </div>

            <div>
              <h1 className="text-3xl font-bold">$1500+</h1>
              <p className="font-normal">Funds raised </p>
            </div>

            <div>
              <h1 className="text-3xl font-bold">11</h1>
              <p className="font-normal">Number of Skills taught</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;