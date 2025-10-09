import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="h-[67vh] flex items-center justify-center bg-white">
      <div className="px-8 py-12">
        <div className="space-y-20">
          {/* Title with ultimate minimalism */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-mono font-thin text-center text-gray-900 tracking-tight leading-none">
            Capture Checking
          </h1>

          {/* Understated subtitle with generous spacing */}
          <p className="text-center text-xl md:text-2xl font-mono font-light text-gray-500 tracking-normal !mt-4">
            Bringing Effect Checking to the Masses
          </p>

          {/* Prominent call-to-action links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 !mt-20">
            <a
              href="https://docs.scala-lang.org/scala3/reference/experimental/cc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-baseline text-xl md:text-2xl font-mono font-normal text-black tracking-wide transition-all duration-200 hover:opacity-60"
            >
              <span className="opacity-40 text-3xl md:text-4xl font-thin leading-none" style={{ marginRight: '1rem' }}>↗</span>
              <span>Documentation</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-black"></span>
            </a>

            <a
              href="#"
              className="group relative inline-flex items-baseline text-xl md:text-2xl font-mono font-normal text-blue-600 tracking-wide transition-all duration-200 hover:opacity-60"
            >
              <span className="opacity-40 text-3xl md:text-4xl font-thin leading-none" style={{ marginRight: '1rem' }}>↗</span>
              <span>Try Capture Checking</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-blue-600"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;