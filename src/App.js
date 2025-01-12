import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App = () => (
    <Router>
        <NavBar />
        <Header />
        <HomePage />
        <Footer />
    </Router>
);

export default App;
