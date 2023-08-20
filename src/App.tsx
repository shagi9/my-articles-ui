import React, { Suspense } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';

import { Counter } from "./components/Counter";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

export const App = () => {
  return (
  	<div className="app">
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