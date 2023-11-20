import React from 'react';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import {Button} from 'react-bootstrap';

const Obr2 = () => {
  return (
    <div id="Obr2_wrapper">
      <h1>
        Образовательные траектории
      </h1>
      <div id="Obr2_cards">
        <div id="Obr2_card_1">
          <div id="Obr2_card_1_div">
            <h1>Дошкольники и <br/>младшая школа</h1>
            <Button variant="outline-light">подробнее</Button>
          </div>
          <img src={card1} alt='' id="img_card_1"/>
        </div>
        <div id="Obr2_card_2">
          <div id="Obr2_card_2_div">
            <h1>Средняя школа</h1>
            <Button variant="outline-light">подробнее</Button>
          </div>
          <img src={card2} alt='' id="img_card_2"/> 
        </div>
        <div id="Obr2_card_3">
          <div id="Obr2_card_3_div">
            <h1>Старшая школа и<br/>взрослые</h1>
            <Button variant="outline-light">подробнее</Button>
          </div>
          <img src={card3} alt='' id="img_card_3"/>
        </div>
      </div>
    </div>
  )
}

export default Obr2
