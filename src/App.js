import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Main from './pages/Main';
import './styles.css';

const App = () => (
    <div id="page-top">
      <Header/>
      <Main/>
      <Footer/>
    </div>
);

export default App;
