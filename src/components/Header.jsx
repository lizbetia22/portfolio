import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import LanguageDropdown from "./DropDownLanguage";
import { SiDailydotdev } from "react-icons/si";
import DarkMode from "./DarkMode";

const Header = ({language, setLanguage, darkMode, setDarkMode}) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const menuItems = {
        colors:
        {
            light_header: [209, 213, 219],
            dark_header: [79, 59, 120]
        },
        fr: [
            { title: "À propos" },
            { title: "Éducation" },
            { title: "Compétences" },
            { title: "Expérience" },
            { title: "Contacts" }
        ],
        en: [
            { title: "About" },
            { title: "Education" },
            { title: "Skills" },
            { title: "Experience" },
            { title: "Contacts" }
        ]
    };

    useEffect(() => {
    }, [language]);

    // Changing of header color
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerTransparency = Math.min(scrollPosition / 500, 1);


    // Sticky header
    useEffect(() => {
        const header = document.querySelector("header");
        if (header) {
            const height = header.offsetHeight;
            setHeaderHeight(height);
        }
    }, []);

    //color of navbar for dark mode
    function rgbToString(rgb) {
        return rgb.join(',');
    }

    //changing navbar color for darkmode
    let backgroundColor = darkMode
        ? `rgba(${rgbToString(menuItems.colors.dark_header)}, ${headerTransparency})`
        : `rgba(${rgbToString(menuItems.colors.light_header)}, ${headerTransparency})`;


    return (
        <header
            className="shadow-sm sticky top-0 z-50"
            style={{ height: headerHeight }}
        >
            <div
                style={{
                    backgroundColor
                }}
            >
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center">
                        <SiDailydotdev className="w-8 h-8 dark:text-light_1" />
                    </div>
                    <nav className="flex items-center space-x-6">
                        {menuItems[language].map((item, index) => (
                            <Link
                                key={index}
                                to={item.title.toLowerCase()}
                                className="cursor-pointer text-lg text-gray-700 dark:text-dark_5 dark:hover:text-dark_2 hover:text-light_7 font-mono"
                                smooth={true}
                                duration={1400}
                                spy={true}
                                exact="true"
                                offset={-headerHeight}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
                        <LanguageDropdown setLanguage={setLanguage} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
