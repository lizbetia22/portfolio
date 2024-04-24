import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import LanguageDropdown from "./DropDownLanguage";
import { SiDailydotdev } from "react-icons/si";
import DarkMode from "./DarkMode";

const Header = ({language, setLanguage}) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Your code for changing language, like fetching translation data, etc.
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

    const menuItems = {
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

    return (
        <header
            className="shadow-sm sticky top-0 z-50"
            style={{ height: headerHeight }}
        >
            <div
                style={{
                    backgroundColor: `rgba(209, 213, 219, ${headerTransparency})`
                }}
            >
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center">
                        <SiDailydotdev className="w-8 h-8" />
                    </div>
                    <nav className="flex items-center space-x-6">
                        {menuItems[language].map((item, index) => (
                            <Link
                                key={index}
                                to={item.title.toLowerCase()}
                                className="cursor-pointer text-lg text-gray-700 hover:text-gray-900 font-mono"
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
                        <DarkMode />
                        <LanguageDropdown setLanguage={setLanguage} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
