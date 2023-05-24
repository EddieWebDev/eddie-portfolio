export const Header = () => {
  return (
    <header className="h-96 bg-hero-image bg-cover flex flex-col ">
      <div className="flex flex-row-reverse gap-4 p-4">
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
      <div className=" flex flex-col items-center justify-center gap-12 h-full">
        <h1 className="text-center text-4xl text-white font-bold">
          Hi there! My name is Svetlana and <br /> <p className="text-pink-400">I'm a front-end developer</p>
        </h1>
        <button className="bg-red-200 rounded-lg p-4 w-auto">
          Download the CV
        </button>
      </div>
    </header>
  );
};
