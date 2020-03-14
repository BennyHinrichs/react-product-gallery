import React, { useState } from 'react'
import '../styles/DarkModeToggle.css'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggle = () => {
    document.body.classList[isDarkMode ? 'remove' : 'add']('dark-mode')
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="DarkModeToggle">
      <h3>{isDarkMode ? 'Light' : 'Dark'} Mode</h3>
      <button className="dark-mode-toggle-btn" onClick={toggle}><i className={`fa fa-${isDarkMode ? 'sun' : 'moon'}-o`}></i></button>
    </div>
  );
}

export default DarkModeToggle;