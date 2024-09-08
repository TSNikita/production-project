import { useContext } from "react";
import {LOCAL_STORAGE_THEMES_KEY, Themes, ThemesContext} from "./ThemesContext";

export function useThemes() {
    const { themes, setThemes } = useContext(ThemesContext);

    function toogleThemes() {
        const newThemes = themes === Themes.DARK ? Themes.LiGHT : Themes.DARK
        setThemes(newThemes);
        localStorage.setItem(LOCAL_STORAGE_THEMES_KEY, newThemes);
    }

    return {
        themes,
        toogleThemes,
    }
}