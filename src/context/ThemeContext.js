//Use this file as template for other Context Providers
import React, { useContext, useState } from 'react';


//Create the context
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()


//Custom hooks to access theme context and update theme
export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
return useContext(ThemeUpdateContext)
}


//Provider for context to all children
export function ThemeProvider({ children }) {
    //This state gets set as ThemeContext.Provider below
    
    
    const [darkTheme, setDarkTheme] = useState(true)
    

    
    //This toggle function gets set as value for ThemeUpdateContext.Provider
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    //Wrap theme providers around the children and set the values to send
    //Send muliple values in object
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
             </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}