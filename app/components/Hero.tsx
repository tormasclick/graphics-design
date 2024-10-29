"use client"; // Add this directive

import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToDesigns = () => {
    const designsSection = document.getElementById('designs');
    if (designsSection) {
      designsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-[75vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/hero/graphic.png')`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white p-6 bg-black bg-opacity-70 rounded-lg">
        {/* Name with gradient effect */}
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Martin Ngungu Kioko
        </h3>

        {/* Divider */}
        <hr className="my-6 mx-auto w-1/2 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" />

        {/* Main heading */}
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Graphics Design Portfolio
        </h1>

        {/* Short description */}
        <p className="text-xl mb-8">
          Showcasing my best design projects.
        </p>

        {/* Design software icons */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <img
            src="/images/icons/figma.png"
            alt="Figma"
            className="h-12 w-12"
          />
          <img
            src="/images/icons/canva.png"
            alt="Canva"
            className="h-12 w-12"
          />
          <img
            src="/images/icons/illustrator.png"
            alt="Adobe Illustrator"
            className="h-12 w-12"
          />
          <img
            src="/images/icons/photoshop.png"
            alt="Adobe Photoshop"
            className="h-12 w-12"
          />
        </div>

        {/* Button to scroll to designs */}
        <button
          onClick={handleScrollToDesigns}
          className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          View My Designs
        </button>
      </div>
    </section>
  );
};

export default Hero;