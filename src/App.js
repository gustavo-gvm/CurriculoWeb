import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Intro from './components/Intro';
import './styles.css';

const App = () => (
    <div id="page-top">
      <Header/>
      <Intro/>
      <Footer/>
    </div>
);

export default App;
