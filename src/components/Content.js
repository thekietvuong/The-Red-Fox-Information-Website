import React from "react"
import './Content.scss'
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Description from "../pages/Description"
import Range from "../pages/Range"
import Diet from "../pages/Diet"
import LifeHistory from '../pages/LifeHistory';
import Conservation from '../pages/Conservation';
import About from "../pages/About";

const routes = [
    {path: "/", name: "Description", Component: Description},
    { path: "/range", name: "Range", Component: Range },
    { path: "/diet", name: "Diet", Component: Diet },
    { path: "/life-history", name: "LifeHistory", Component: LifeHistory },
    { path: "/conservation", name: "Conservation", Component: Conservation },
    { path: "/about", name: "About", Component: About }
];

const routeComponents = routes.map(({path, Component}) =>
    <Route path={path} element={<Component/>}/>
);

function Content() {
    const location = useLocation();

    return(
        <div className="content">
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    {routeComponents}
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default Content;