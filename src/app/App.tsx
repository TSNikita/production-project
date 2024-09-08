import {Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'

import { Suspense } from 'react';
import { useThemes } from './providers/ThemeProvider';
import { AboutPageLazy } from 'pages/AboutPage';
import { MainPageLazy } from 'pages/MainPage';

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

