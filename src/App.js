import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Intro from './components/Intro';
import Main from './pages/Main';
import './styles.css';

const App = () => (
    <div id="page-top">
      <Header/>
      <Intro/>
      <Main/>
      <Footer/>
    </div>
);

export default App;
