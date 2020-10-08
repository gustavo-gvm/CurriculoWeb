import React from 'react';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Intro from './components/Intro';
import './styles.css';

const App = () => (
    <div id="page-top">
      <Header/>
      <Intro/>
      <Aboutme/>
      <Footer/>
    </div>
);

export default App;
