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
import {Container} from '@mui/material';

function App() {

    return (

        <Router>
            <Container className="App">
                <Header/>
                <Navigation/>
                <Switch>
                    <Route component={Home} path="/home"/>
                    <Route component={Portfolio} path="/portfolio"/>
                    <Route component={About} path="/about"/>
                    <Route component={Contact} path="/contact"/>
                </Switch>
                <Footer/>
            </Container>
        </Router>
    );
}

export default App;
