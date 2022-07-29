import React from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Sidebar";
import Members from "./components/Members/Members"

function App() {

    return (

        <Router>
            <Header/>
            <main className="page-content">
                <nav className="content-navigation">
                    <Navigation/>
                </nav>
                <article className="content-article">
                    <Switch>
                        <Route component={Home} path="/home"/>
                        <Route component={Portfolio} path="/portfolio"/>
                        <Route component={About} path="/about"/>
                        <Route component={Members} path="/members"/>
                        <Route component={Contact} path="/contact"/>
                    </Switch>
                </article>
                <aside className="content-sidebar">
                    <SideBar/>
                </aside>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
