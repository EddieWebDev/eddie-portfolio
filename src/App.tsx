import { Footer } from "Components/Footer";
import { Header } from "Components/Header";
import { About } from "Components/About";
import { Skills } from "Components/Skills";
import { Portfolio } from "Components/Portfolio";
import { Contacts } from "Components/Contacts";

const App = () => {
  return (
    <div className="min-h-screen flex-col justify-center items-center">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
