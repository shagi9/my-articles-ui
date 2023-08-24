import React, { Suspense } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";

export const App = () => {
	const { theme, toggleTheme } = useTheme();

  return (
  	<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={'/'}>Main Page</Link> 
			<Link to={'/about'}>About Page</Link> 
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPageAsync />} />
					<Route path={'/about'} element={<AboutPageAsync />}/>
				</Routes>
      </Suspense>
    </div>
  )
}