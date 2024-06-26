import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";
import LanguageDropdown from "./DropDownLanguage";
import { SiDailydotdev } from "react-icons/si";
import DarkMode from "./DarkMode";
import {useLocation, useNavigate} from "react-router";
import {IoHome} from "react-icons/io5";

const Header = ({
                    language,
                    setLanguage,
                    darkMode,
                    setDarkMode,
                    setSkillsInView,
                    setEducationInView,
                    setExperienceInView,
                    setContactsInView
                }) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuItems = {
        colors:
            {
                light_header: [209, 213, 219],
                dark_header: [79, 59, 120]
            },
        fr:
            [
                {title: "À propos"},
                {title: "Éducation"},
                {title: "Compétences"},
                {title: "Expérience"},
                {title: "Contacts"},
            ],
        en:
            [
                {title: "About"},
                {title: "Education"},
                {title: "Skills"},
                {title: "Experience"},
                {title: "Contacts"},
            ]
    };

    useEffect(() => {
    }, [language]);

    /**
     * @description Changing of header color and css transitions for sections
     */
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            const skillsSection = document.getElementById("skills");
            const educationSection = document.getElementById("education");
            const experienceSection = document.getElementById("experience");
            const contactsSection = document.getElementById("contacts");
            if (contactsSection) {
                const contactsSectionTop = contactsSection.offsetTop;
                const contactsSectionHeight = contactsSection.offsetHeight;
                const windowBottom = window.scrollY + window.innerHeight;
                //Check if contacts section is in view
                if (windowBottom > contactsSectionTop && window.scrollY < contactsSectionTop + contactsSectionHeight) {
                    setContactsInView(true);
                } else {
                    setContactsInView(false);
                }
            }
            if (experienceSection) {
                const experienceSectionTop = experienceSection.offsetTop;
                const experienceSectionHeight = experienceSection.offsetHeight;
                const windowBottom = window.scrollY + window.innerHeight;
                //Check if experience section is in view
                if (windowBottom > experienceSectionTop && window.scrollY < experienceSectionTop + experienceSectionHeight) {
                    setExperienceInView(true);
                } else {
                    setExperienceInView(false);
                }
            }
            if (educationSection) {
                const educationSectionTop = educationSection.offsetTop;
                const educationSectionHeight = educationSection.offsetHeight;
                const windowBottom = window.scrollY + window.innerHeight;
                //Check if education section is in view
                if (windowBottom > educationSectionTop && window.scrollY < educationSectionTop + educationSectionHeight) {
                    setEducationInView(true);
                } else {
                    setEducationInView(false);
                }
            }
            if (skillsSection) {
                const skillsSectionTop = skillsSection.offsetTop;
                const skillsSectionHeight = skillsSection.offsetHeight;
                const windowBottom = window.scrollY + window.innerHeight;
                //Check if skills section is in view
                if (windowBottom > skillsSectionTop && window.scrollY < skillsSectionTop + skillsSectionHeight) {
                    setSkillsInView(true);
                } else {
                    setSkillsInView(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setSkillsInView, setEducationInView, setExperienceInView, setContactsInView]);

    const headerTransparency = Math.min(scrollPosition / 500, 1);

    /**
     * @description sticky header
     */
    useEffect(() => {
        const header = document.querySelector("header");
        if (header) {
            const height = header.offsetHeight;
            setHeaderHeight(height);
        }
    }, []);

    function rgbToString(rgb) {
        return rgb.join(',');
    }

    /**
     * @description dark mode for navbar
     * @type {string}
     */
    let backgroundColor = darkMode
        ? `rgba(${rgbToString(menuItems.colors.dark_header)}, ${headerTransparency})`
        : `rgba(${rgbToString(menuItems.colors.light_header)}, ${headerTransparency})`;


    return (
        <header className="shadow-sm sticky top-0 z-50">
            <div style={{ backgroundColor }}>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex justify-between items-center px-4 py-3">
                    <div className={"flex space-x-3"}>
                        <SiDailydotdev
                            className="w-5 h-5 dark:text-light_1 cursor-pointer"
                        />
                        {isMobileMenuOpen && (
                            <>
                                <div className="dark:text-light_1 cursor-pointer">
                                    <DarkMode className={"w-5 h-5"} darkMode={darkMode} setDarkMode={setDarkMode}/>
                                </div>
                                <div className="dark:text-light_1 cursor-pointer">
                                    <LanguageDropdown className={"w-5 h-5"} setLanguage={setLanguage}/>
                                </div>
                            </>
                        )}
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 dark:text-dark_5 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        {menuItems[language].map((item, index) => (
                            <Link
                                key={item.title}
                                to={item.title.toLowerCase()}
                                className="cursor-pointer block px-4 py-2 text-gray-700 dark:text-dark_5 hover:text-light_7 font-mono"
                                smooth={true}
                                duration={1400}
                                spy={true}
                                exact="true"
                                offset={-headerHeight}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
                <div style={{ backgroundColor }}>
                    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                        <div className="flex items-center">
                            <SiDailydotdev className="w-7 h-7 dark:text-light_1 cursor-pointer"/>
                            {currentPath === "/portfolio/" || currentPath === "/portfolio" ?
                                "" :
                                <>
                                    <button onClick={() => {
                                        navigate("/portfolio/")
                                    }}
                                            className="cursor-pointer text-lg text-gray-700 dark:text-dark_5 dark:hover:text-dark_2 hover:text-light_7 font-mono"
                                    >
                                        <IoHome className="ml-4 w-8 h-8 text-black dark:text-light_1 cursor-pointer"/>
                                    </button>
                                </>
                            }
                        </div>
                        <nav className="flex items-center space-x-6">
                            {currentPath === "/portfolio/" || currentPath === "/portfolio" ?
                                <>

                                    {menuItems["en"].map((item, index) => (
                                        <Link
                                            key={menuItems[language][index].title}
                                            to={item.title.toLowerCase()}
                                            className="cursor-pointer text-lg text-gray-700 dark:text-dark_5 dark:hover:text-dark_4 hover:text-light_7 font-mono"
                                            smooth={true}
                                            duration={1400}
                                            spy={true}
                                            exact="true"
                                            offset={-headerHeight}
                                        >
                                            {menuItems[language][index].title}
                                        </Link>
                                    ))}
                                </> : ""
                            }

                        </nav>
                        <div className="flex items-center space-x-4">
                            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
                            <LanguageDropdown setLanguage={setLanguage}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
