import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="px-8 py-16">
        <div className="space-y-20">
          {/* Title with ultimate minimalism */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-thin text-center text-gray-900 tracking-wide leading-none">
            Capture Checking
          </h1>

          {/* Understated subtitle with generous spacing */}
          <p className="text-center text-xl md:text-2xl font-light text-gray-500 tracking-normal">
            Bringing Effect Checking to the Masses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;