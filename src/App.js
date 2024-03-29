import React from 'react';
import NavBar from './components/NavBar';
import Sidebar from "./components/Sidebar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import About from './components/about/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="app">
			<div className="container app__container">
				<div className="row app__row">
					<div className="col-lg-3">
						<Sidebar />
					</div>
					<div className="col-lg-9 app__main-content">
						<NavBar />
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.key}>
								<Route exact path="/">
									<About />
								</Route>
								<Route path="/resume">
									<Resume />
								</Route>
								<Route path="/projects">
									<Projects />
								</Route>
								<Route>
									<Redirect to="/" />
								</Route>
							</Switch>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
