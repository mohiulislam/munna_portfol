import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MainLayout from "./components/layouts/MainLayout";
import Services from "./components/Services";

function App() {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <Services />
      <Contact />
    </MainLayout>
  );
}

export default App;
