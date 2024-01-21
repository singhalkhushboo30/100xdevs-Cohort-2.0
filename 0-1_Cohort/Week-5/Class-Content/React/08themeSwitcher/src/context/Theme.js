import React from "react"
import {createContext,useContext} from "react"

export const ThemeContext=createContext({themeMode:"light",
darkTheme:()=>{},
lightTheme:()=>{}})

//Variable export

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}