import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import AboutMe from './components/aboutme/AboutMe';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const Main = () => (
  <div>
    <Header />
    <Introduction />
    <AboutMe />
    <Project />
    <Contact />
    <Footer/>
  </div>
);

ReactDOM.render(<Main />, document.getElementById('root'));

reportWebVitals();
