import Header from "./components/Header";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
      <>
          <div className="bg-gray-200 dark:bg-gray-800">
        <Header/>

              <section id="about" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                  <About/>
              </section>

              <section id="education" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Education/>
          </section>

          <section id="skills" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Skills/>
          </section>

          <section id="experience" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Experience/>
          </section>

          <section id="contacts" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Contacts/>
          </section>
             <Footer/>
          </div>
      </>
  );
}

export default App;
