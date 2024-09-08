import React, {FC, useMemo, useState } from 'react';
import {LOCAL_STORAGE_THEMES_KEY, Themes, ThemesContext } from '../lib/ThemesContext';

const defaultThemes = localStorage.getItem(LOCAL_STORAGE_THEMES_KEY) as Themes || Themes.LiGHT

const ThemesProvider: FC = ({ children }) => {
    const [themes, setThemes] = useState<Themes>(defaultThemes)


    const childContext = useMemo(() => ({
        themes,
        setThemes,
    }), [themes])

    return (
        <ThemesContext.Provider value={childContext}>
            {children}
        </ThemesContext.Provider>
    );
}

export { ThemesProvider } ;