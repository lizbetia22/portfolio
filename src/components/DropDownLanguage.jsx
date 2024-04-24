import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import 'react-dropdown/style.css';
import { hasFlag } from 'country-flag-icons';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

const getFlag = (country) => {
    if (hasFlag(country)) {
        return `http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`;
    } else {
        // If flag is not available, return Unicode
        return getUnicodeFlagIcon(country);
    }
};

const LanguageDropdown = ({setLanguage}) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = [
        { value: 'en', label: <div className="flex items-center w-24"><img src={getFlag('GB')} alt="GB Flag" className="w-6 h-6 mr-2 rounded" /> English</div> },
        { value: 'fr', label: <div className="flex items-center"><img src={getFlag('FR')} alt="French Flag" className="w-6 h-6 mr-2 rounded" /> Français</div> }
    ];

    const handleLanguageClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (selectedOption) => {
        setIsOpen(false);
        setLanguage(selectedOption.value)
    };

    return (
        <div className="relative inline-block">
            <div onClick={handleLanguageClick}>
                <GrLanguage className="cursor-pointer w-5 h-5" />
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                    {options.map(option => (
                        <div key={option.value} onClick={() => handleOptionClick(option)} className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center">
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
