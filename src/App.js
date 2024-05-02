import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";
import {useState} from "react";
import Blog from "./pages/Blog";
import Login from "./pages/Login";

function App() {
    const [language, setLanguage] = useState("en");
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });
    const [skillsInView, setSkillsInView] = useState(false);
    const [educationInView, setEducationInView] = useState(false);
    const [experienceInView, setExperienceInView] = useState(false);
    const [contactsInView, setContactsInView] = useState(false);

    return (
        <>
                <Router>
                    <div className="bg-light_2 dark:bg-dark_2">
                        <Header language={language} setLanguage={setLanguage} darkMode={darkMode}
                                setDarkMode={setDarkMode} skillsInView={skillsInView} setSkillsInView={setSkillsInView}
                                setEducationInView={setEducationInView} setExperienceInView={setExperienceInView}
                                setContactsInView={setContactsInView}/>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <section id="about" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                                            <About language={language}/>
                                        </section>

                                        <section id="education" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                                            <Education language={language} educationInView={educationInView}/>
                                        </section>

                                        <section id="skills" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                                            <Skills language={language} skillsInView={skillsInView}/>
                                        </section>

                                        <section id="experience"
                                                 className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                                            <Experience language={language} experienceInView={experienceInView}/>
                                        </section>

                                        <section id="contacts" className="w-full py-6 md:py-12 lg:py-16 xl:py-24 mt-0">
                                            <Contacts language={language} contactsInView={contactsInView}/>
                                        </section>
                                    </>
                                }
                            />
                            <Route path="/login" element={<Login language={language}/>}/>
                            <Route path="/blog" element={<Blog language={language}/>}/>
                        </Routes>
                        <Footer language={language}/>
                    </div>
                </Router>
        </>
    );
}

export default App;
