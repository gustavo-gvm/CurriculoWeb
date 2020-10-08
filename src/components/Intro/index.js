import React from 'react';
import curriculo from '../../assets/docs/curriculo.pdf';
import profilePic from '../../assets/img/profilePic.jpg';
import './styles.css';

const Intro = () => (
  <section id="home" className="intro">
    <div id="capa">
      <div id="intro-img">
        <img src={profilePic} alt="Foto de Gustavo Vieira Martins"/>
      </div>
    </div>
    <div id="intro-title">
      <h1 className="intro-title">
        Gustavo<br/><span>Vieira Martins</span>
      </h1>
      <br/>
      <p className="intro-subtitle">
        <span className="text-slider-items">Dev Front-End, Estudante de ADS, Estagiário</span>
        <span className="text-slider"></span>
      </p>
      <a id="btCurriculo" class="btn btn-primary" href={curriculo} target="_blank" role="button" data-toggle="tooltip" data-placement="bottom" title="Clique para visualizar o Currículo em PDF">Currículo</a>
    </div>
  </section>
);

export default Intro;
