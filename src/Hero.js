import React from 'react';
import bg from './images/bg.svg';
import {Button} from 'react-bootstrap';

const Hero = () => {
  return (
      <div id="bg_img">
          <div id="hero_div">  
            <h1 id="hero_txt">
              Образовательный центр
              <br/>нового поколения для всех возрастов
            </h1>
            <Button variant="primary">Записаться!</Button>
          </div>  
        <div id="buttons_hero">
          <Button variant="secondary">программирование</Button>
          <Button variant="secondary">web-design</Button>
          <Button variant="secondary">мобильная разработка</Button>
          <Button variant="secondary">и многое другое</Button>
        </div>
        <img id="img" src={bg} alt=''/>
      </div>
  )
}

export default Hero
