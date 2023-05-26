import { Footer } from "Components/Footer";
import { Header } from "Components/Header";
import { About } from "Components/About";
import { Skills } from "Components/Skills";
import { Portfolio } from "Components/Portfolio";

const App = () => {
  return (
    <div className="min-h-screen flex-col justify-center items-center">
      <Header />
      <main className="mx-auto px-4 text-left lg:text-center lg:px-12 max-w-7xl">
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
};

export default App;
