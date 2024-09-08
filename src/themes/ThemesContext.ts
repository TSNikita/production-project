import { createContext } from "react";

export enum Themes {
    LiGHT = 'light',
    DARK = 'dark'
}

interface ThemesContextType  {
    themes?: Themes,
    setThemes?: (themes: Themes) => void,
}

export const ThemesContext = createContext<ThemesContextType>({})

export const LOCAL_STORAGE_THEMES_KEY = 'themes'