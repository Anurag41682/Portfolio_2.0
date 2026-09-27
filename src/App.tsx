import About from "./section/about/About";
import Contact from "./section/contact/Contact";
import FloatinNav from "./section/floating-nav/FloatinNav";
import Header from "./section/header/Header";
import Navbar from "./section/navbar/Navbar";
import Portfolio from "./section/portfolio/Portfolio";
import useReveal from "./hooks/useReveal";

const App = () => {
  useReveal();
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <FloatinNav />
    </main>
  );
};

export default App;
