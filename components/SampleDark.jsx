import React, { useState } from 'react'

function SampleDark() {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  return (
    <div className='h-full flex items-center justify-center
    flex-col gap-4 transition-all ease-in-out'>
        <button
            onClick={toggleTheme}
            className='rounded-full p-2 shadow-md
            shadow-purple-400 text-gray-600 hover:text-purple-400
            transition-all ease-in-out cursor-pointer'
        >{theme === "light" ? 'Moon' : 'Sun'}</button>
      <div>
        {theme === "light"
        ? "Bright mode activated"
        : "Welcome to the dark side"
    }
      </div>
    </div>
  )
}

export default SampleDark
