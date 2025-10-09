import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="px-8 py-16">
        <div className="space-y-20">
          {/* Title with ultimate minimalism */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-thin text-center text-gray-900 tracking-tight leading-none">
            Capture Checking
          </h1>

          {/* Understated subtitle with generous spacing */}
          <p className="text-center text-xl md:text-2xl font-light text-gray-500 tracking-normal !mt-4">
            Bringing Effect Checking to the Masses
          </p>

          {/* Prominent call-to-action links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 !mt-20">
            <a
              href="https://docs.scala-lang.org/scala3/reference/experimental/cc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-xl md:text-2xl font-normal text-black tracking-wide transition-all duration-200 hover:opacity-60"
            >
              Documentation in Scala 3
              <span className="absolute -bottom-2 left-0 w-full h-px bg-black"></span>
            </a>

            <a
              href="#"
              className="group relative text-xl md:text-2xl font-normal text-blue-600 tracking-wide transition-all duration-200 hover:opacity-60"
            >
              Try Capture Checking
              <span className="absolute -bottom-2 left-0 w-full h-px bg-blue-600"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;