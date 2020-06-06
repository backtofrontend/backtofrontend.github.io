import React from 'react'
import useDarkMode from 'use-dark-mode'
import { FaMoon, FaSun } from 'react-icons/fa'
import { rhythm } from '../utils/typography'

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false)

    return (
        <div
            onClick={darkMode.toggle}
            className="dark-mode-toggle"
            style={{
                position: 'absolute',
                top: rhythm(1 / 4),
                right: rhythm(1 / 4),
                width: rhythm(1),
                height: rhythm(1),
                borderRadius: '50%',
                cursor: 'pointer',
                color: 'gold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'darkslateblue',
            }}
        >
            {darkMode.value ? (
                <FaMoon size="16px" className="moon__icon" />
            ) : (
                <FaSun size="16px" className="sun__icon" />
            )}
        </div>
    )
}

export default DarkModeToggle
