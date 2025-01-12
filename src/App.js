import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactUs from "./pages/ContactUs";
import Header from './components/Header';

const App = () => (
    <Router>
        <NavBar />
        <Routes>
            {/* Include Header on the HomePage route */}
            <Route path="/" element={
                <>
                    <Header />
                    <HomePage />
                </>
            } />
            <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
