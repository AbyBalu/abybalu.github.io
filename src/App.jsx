import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollProgress />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Services />
        <HireMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
