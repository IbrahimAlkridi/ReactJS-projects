import React, { useState, useEffect } from 'react'
import '../../main.css'
import './modeToggle.css'
import whiteToggle from '../../assets/white-toggle.svg'
import darkToggle from '../../assets/black-toggle.svg'

const ModeToggle = () => {
    const [isDefMode, setMode] = useState(() => {

        return localStorage.getItem("mode").toLowerCase() === "true";
    })

    useEffect(() => {
        localStorage.setItem("mode", isDefMode ? "true" : "false")
    }, [isDefMode])

    useEffect(() => {
        { (localStorage.getItem("mode").toLowerCase() === "true") ? setLight() : setDark() }

    }, [])





    const setLight = () => {
        setMode(true);
        document.body.setAttribute("data-theme", "light");
    }

    const setDark = () => {
        setMode(false);
        document.body.setAttribute("data-theme", "dark");
    }

    const toggleMode = () => {
        if (isDefMode) {
            setDark();
        } else {
            setLight();
        }
    }
    return (
        <div className="mode" >
            {/* contains the mode button which switches the theme color Dark/Light */}
            {/* Located in the top left of the page */}
            <div className="toggle-btn" onClick={toggleMode}>
                <img

                    src={isDefMode ? whiteToggle : darkToggle}
                    alt="button-toggle"
                />
                {isDefMode ? <p className='mode-mark'>Dark Mode?</p> : <p className='mode-mark'>Light Mode?</p>}


            </div>
        </div>
    )
}

export default ModeToggle