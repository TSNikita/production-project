import {Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'

import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Suspense, useState } from 'react';
import { useThemes } from './themes/useThemes';

function App() {
const { themes, toogleThemes } = useThemes()

    return (
        <div className={`app ${themes}`}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>O сайте</Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />} />
                    <Route path={'/'} element={<MainPageLazy />} />
                </Routes>
            </Suspense>

            <button onClick={toogleThemes}>{themes}</button>
        </div>
    );
}

export default App;

// посмотрел 7 урок 6-22min