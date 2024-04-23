import Header from "./components/Header";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contacts from "./sections/Contacts";

function App() {
  return (
      <>
          <div className="dark:bg-gray-800">
        <Header/>

          <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <About/>
          </section>

          <section id="education" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <Education/>
          </section>

          <section id="skills" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <Skills/>
          </section>

          <section id="experience" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <Experience/>
          </section>

          <section id="contacts" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <Contacts/>
          </section>
          </div>
      </>
  );
}

export default App;
