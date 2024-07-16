import React, { useEffect, useState } from 'react';
import logo from '../assets/logo1.png'

export default function Header() {
  const [theme , setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "colorLight");

  useEffect(()=> {
    localStorage.setItem("theme", JSON.stringify(theme))
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  },[theme])

  return (
    <header>
        <div className='logo'>
        <img src={logo} alt="todo logo" />
        <span>Todo List</span>
        </div>

        <div className="themeSelector">
            <span onClick={() => setTheme("colorLight")} className= { theme === "colorLight" ? "colorLight activeTheme" : "colorLight" }></span>
            <span onClick={() => setTheme("colorGrey")} className= {theme === "colorGrey" ? "colorGrey activeTheme": "colorGrey"}></span>
            <span onClick={() => setTheme("colorDark")} className= {theme === "colorDark" ? "colorDark activeTheme": "colorDark"}></span>
            <span onClick={() => setTheme("colorBlue")} className= {theme === "colorBlue" ? "colorBlue activeTheme" : " colorBlue"}></span>
            <span onClick={() => setTheme("colorMix")} className= {theme === "colorMix" ? "colorMix activeTheme" : "colorMix"}></span>
        </div>
    </header>
  )
}
