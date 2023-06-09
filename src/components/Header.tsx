import { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-52 lg:h-96 bg-hero-image bg-cover flex flex-col text-white">
      {/* MOBILE */}
      <div className="fixed top-0 w-full bg-black opacity-90 lg:hidden">
        <div className="flex justify-between p-4 max-w-7xl">
          <div className="flex items-center gap-6">
            <button
              id="hamburger-button"
              className={`h-8 w-8 cursor-pointer text-3xl lg:hidden ${
                showMenu && "toggle-btn"
              }`}
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <div
                className="-mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']
              "
              />
            </button>
            <p className="text-3xl font-bold uppercase">Eddie</p>
          </div>
          <button className="bg-red-200 rounded-3xl p-2 w-auto">
            Download CV
          </button>
        </div>
      </div>

      {showMenu && (
        <section
          id="mobile-menu"
          className="top-68 fixed top-0 flex w-full origin-top animate-open-menu flex-col justify-center bg-black text-5xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <button className="fixed top-4 left-4">x</button>
          <nav
            className="flex min-h-screen flex-col items-center justify-center py-8 gap-14 text-white"
            aria-label="mobile"
          >
            <a href="#about">
              <p>About</p>
            </a>
            <a href="#skills">
              <p>Skills</p>
            </a>
            <a href="#portfolio">
              <p>Portfolio</p>
            </a>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </nav>
        </section>
      )}

      {/* DESKTOP */}
      <div className="hidden lg:block h-full">
        
        <div className="fixed top-0 w-full bg-black opacity-90">
          <div className="flex justify-between mx-10 my-6">
            <div className="flex items-center gap-8">
              <p className="text-5xl font-bold uppercase">Eddie</p>
              <nav className="flex gap-4 text-white text-xl">
                <a href="#about" className="hover:opacity-75">
                  <p>About</p>
                </a>
                <a href="#skills" className="hover:opacity-75">
                  <p>Skills</p>
                </a>
                <a href="#portfolio" className="hover:opacity-75">
                  <p>Portfolio</p>
                </a>
                <a href="#contact" className="hover:opacity-75">
                  <p>Contact</p>
                </a>
              </nav>
            </div>
            <button className="bg-red-200 rounded-3xl px-2">
              Download CV
            </button>
          </div>
        </div>

        <div className="h-full flex items-center justify-center">
          <h1 className="text-center text-4xl text-white font-bold">
            Hi there! My name is Svetlana and <br />{" "}
            <p className="text-pink-400">I'm a front-end developer</p>
          </h1>
        </div>
      </div>
    </header>
  );
};
