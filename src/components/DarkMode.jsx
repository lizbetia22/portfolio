import React, {useEffect} from 'react';
import {DarkModeSwitch} from "react-toggle-dark-mode";

const DarkMode = ({darkMode,setDarkMode,className}) => {
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <DarkModeSwitch
            style={{color: "black"}}
            checked={darkMode}
            onChange={toggleDarkMode}
            moonColor={'#C4BBF0'}
            size={20}
            className={className}
        />
    );
};

export default DarkMode;