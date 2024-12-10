import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import ContactMe from './components/Contact me/ContactMe';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './ThemeProvider'; // Import the ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Wrap your entire app with ThemeProvider */}
      <div className="App">
        <Header />
        <Profile />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Contact />
        <ContactMe />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
