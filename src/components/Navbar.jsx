import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import logoImage from '../assets/images/aaiaa.png';

import enMenu from '../assets/data/menu.en.json';
import teMenu from '../assets/data/menu.te.json';

export default function Navbar({ language, setLanguage }) {
  const [menuItems, setMenuItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (language === 'te') {
      setMenuItems(teMenu);
    } else {
      setMenuItems(enMenu);
    }
  }, [language]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="menu-row">
      <div className="menu-box">
        <a href="#" className="logo">
          <img src={logoImage} alt="Logo" />
        </a>

        <select 
          id="selectLanguage" 
          value={language} 
          onChange={handleLanguageChange}
          className="p-1 rounded bg-white text-black border border-gray-300 text-sm font-medium cursor-pointer"
        >
          <option value="en">English</option>
          <option value="te">Telugu</option>
        </select>

        <div id="mainmenu">
          <a 
            href="#" 
            id="menu_trigger" 
            className={`lg:hidden ${menuOpen ? 'menuopen' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="menulines"></span>
          </a>

          {/* Mobile menu container controlled by menuOpen state */}
          <div 
            className="mobile-menu" 
            style={{ display: menuOpen ? 'block' : undefined }}
          >
            <ul id="menu" className="menu">
              {menuItems.map((item, index) => (
                item.name !== "" && <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}