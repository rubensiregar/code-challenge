import * as React from 'react';

interface IHeroSectionProps {
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
      <section id="hero" className="flex h-svh bg-violet-200 items-end">
          <img
              className="absolute z-0 w-full h-screen object-cover "
              src="./img/hero.webp"
              alt="hero"
          />

          <div className="flex items-end absolute p-8 gap-8">
              <div className="flex flex-col rounded-lg w-1/5 p-2 bg-white">
                  <img className="" src="./img/gallery.webp" alt="" />
                  <h2 className="font-semibold">gallery</h2>
              </div>
          </div>
      </section>
  );
};

export default HeroSection;
