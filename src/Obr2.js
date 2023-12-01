import React from 'react';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import {Button} from 'react-bootstrap';
import {motion} from 'framer-motion';

const Obr2 = () => {
  const [hoverState, sethover] = React.useState(false);
  const [hoverState2, sethover2] = React.useState(false);
  const [hoverState3, sethover3] = React.useState(false);
  return (
    <div id="Obr2_wrapper">
      <h1>
        Образовательные траектории
      </h1>
      <div id="Obr2_cards">
        <motion.div id="Obr2_card_1"
        onHoverStart={() =>{
          sethover(hoverState => true);
        }}
        onHoverEnd={() => {
          sethover(hoverState => false);
        }}
        >
          <div id="Obr2_card_1_div">
            <motion.h1
            animate ={{y: hoverState ? 0 : 20}}
            transition={{duration: 0.15}}
            >
              Дошкольники и <br/>младшая школа
            </motion.h1>
            <motion.div
            transition={{duration: 0.15}}
            initial ={{opacity: 0}}
            animate ={{y: hoverState ? 0 : -20, opacity: hoverState ? 1 : 0}}
            >
              <Button variant="outline-light">подробнее
              </Button>
            </motion.div>
          </div>
          <motion.img src={card1} alt='' id="img_card_1"/>
        </motion.div>
        <motion.div id="Obr2_card_2"
        onHoverStart={() => {
          sethover2(hoverState2 => true);
        }}
        onHoverEnd={() => {
          sethover2(hoverState2 => false);
        }}
        >
          <div id="Obr2_card_2_div">
            <motion.h1
            animate ={{y: hoverState2 ? 0 : 20}}
            transition={{duration: 0.15}}
            >
              Средняя школа
            </motion.h1>
            <motion.div
              transition={{duration: 0.15}}
              initial ={{opacity: 0}}
              animate ={{y: hoverState2 ? 0 : -20, opacity: hoverState2 ? 1 : 0}}
            >
              <Button variant="outline-light">подробнее</Button>
            </motion.div>
          </div>
          <img src={card2} alt='' id="img_card_2"/> 
        </motion.div>
        <motion.div id="Obr2_card_3"
        onHoverStart={() => {
          sethover3(hoverState3 => true);
        }}
        onHoverEnd={() => {
          sethover3(hoverState3 => false);
        }}
        >
          <div id="Obr2_card_3_div">
            <motion.h1
            animate ={{y: hoverState3 ? 0 : 20}}
            transition={{duration: 0.15}}
            >
              Старшая школа и<br/>взрослые
            </motion.h1>
            <motion.div
            transition={{duration: 0.15}}
            initial ={{opacity: 0}}
            animate ={{y: hoverState3 ? 0 : -20, opacity: hoverState3 ? 1 : 0}}
            >
              <Button variant="outline-light">подробнее</Button>
            </motion.div>
          </div>
          <img src={card3} alt='' id="img_card_3"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Obr2
