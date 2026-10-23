import React, { useState } from 'react';

export default function MenuItem({ item }) {
  const [subOpen, setSubOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const handleMobileTrigger = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubOpen(true);
  };

  const handleBack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubOpen(false);
  };

  return (
    <li className={`${hasSubmenu ? 'megamenu' : ''} ${subOpen ? 'sub-open' : ''}`}>
      <a href={item.url}>
        {item.name}
        {hasSubmenu && (
          <span className="navtrigger lg:hidden" onClick={handleMobileTrigger} />
        )}
      </a>

      {hasSubmenu && (
        <ul className="submenu">
          {/* Explicitly hidden on desktop (lg:hidden) */}
          <li className="backmenu-row lg:hidden">
            <a href="#" className="back-trigger" onClick={handleBack} />
            <em>{item.name}</em>
          </li>
          
          {item.submenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}