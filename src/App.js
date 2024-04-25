import Header from "./components/Header";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";
import {useState} from "react";
import Blog from "./sections/Blog";
import Login from "./sections/Login";

function App() {
    const [language, setLanguage] = useState("en");
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });
    return (
      <>
          <div className="bg-light_2 dark:bg-dark_2">
        <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode}/>
          <section id="about" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <About language={language} />
          </section>

          <section id="education" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Education language={language} />
          </section>

          <section id="skills" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Skills language={language} />
          </section>

          <section id="experience" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Experience language={language} />
          </section>

          <section id="contacts" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
              <Contacts language={language} />

              <section id="blog" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                  <Blog language={language} />
              </section>

              <section id="login" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                  <Login language={language} />
              </section>

          </section>
             <Footer language={language}/>
          </div>
      </>
  );
}

export default App;
