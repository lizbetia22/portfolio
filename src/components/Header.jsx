import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import LanguageDropdown from "./DropDownLanguage";
import { SiDailydotdev } from "react-icons/si";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import DarkMode from "./DarkMode";

const Header = () => {
    const [isDarkMode, setDarkMode] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Changing of header color
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerTransparency = Math.min(scrollPosition / 500, 1);

    // Sticky header
    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            const height = header.offsetHeight;
            setHeaderHeight(height);
        }
    }, []);

    //dark mode
    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        // You can add logic here to handle the dark mode state change, such as changing the theme of your application.
    };

    return (
        <header className="shadow-sm sticky top-0 z-50" style={{height: headerHeight}} >
            <div style={{ backgroundColor: `rgba(180, 200, 250, ${headerTransparency})` }}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center">
                    <SiDailydotdev className="w-8 h-8"/>
                </div>
                <nav className="flex items-center space-x-6">
                    <Link to="about" className="cursor-pointer text-lg text-gray-700 hover:text-gray-900 font-mono"
                          smooth={true} duration={1400} spy={true} exact="true" offset={-headerHeight}>
                        About
                    </Link>
                    <Link to="education" className="cursor-pointer text-lg text-gray-700 hover:text-gray-900 font-mono"
                          smooth={true} duration={1400} spy={true} exact="true" offset={-headerHeight}>
                        Education
                    </Link>
                    <Link to="skills" className="cursor-pointer text-lg text-gray-700 hover:text-gray-900 font-mono"
                          smooth={true} duration={1400} spy={true} exact="true" offset={-headerHeight}>
                        Skills
                    </Link>
                    <Link to="experience" className="cursor-pointer text-lg text-gray-700 hover:text-gray-900 font-mono"
                          smooth={true} duration={1400} spy={true} exact="true" offset={-headerHeight}>
                        Experience
                    </Link>
                    <Link to="contacts" className="cursor-pointer text-lg text-gray-700 hover:text-gray-900 font-mono"
                          smooth={true} duration={1400} spy={true} exact="true" offset={-headerHeight}>
                        Contacts
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    {/*<DarkModeSwitch*/}
                    {/*    checked={isDarkMode}*/}
                    {/*    onChange={toggleDarkMode}*/}
                    {/*    size={25} // Adjust the size as needed*/}
                    {/*    moonColor="#000" // Customize moon color*/}
                    {/*    sunColor="#000" // Customize sun color*/}
                    {/*/>*/}
                    <DarkMode/>
                    <LanguageDropdown/>
                </div>
            </div>
            </div>
        </header>
    );

};

export default Header;
