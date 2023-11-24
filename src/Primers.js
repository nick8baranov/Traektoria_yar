import React from 'react';
import { Button } from 'react-bootstrap';
import Kreper from './images/kreper.png';
import Piromids from './images/piromids.png';
import Lego from './images/lego.jpg';


const Primers = () => {
  return (
    <div id='prim'>
      <div id='cards_glav'>
        <div id='cards'> 
          <div id='card1'>
          <img id='lego' src={Lego}>
            </img>
          </div>
          <div id='card2'>
            <img id='krep' src={Kreper}>
            </img>
          </div>
          <div id='card3'>
            <img id='pir' src={Piromids}>
            </img>
          </div>
        </div>
      </div>
      <div id='many_prim_ab'>
        <div id='many_prim'>
          <Button  variant="dark">
            <svg id='arr1' width="491" height="852" viewBox="0 0 491 852" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M471.282 833.262C483.28 821.26 490.021 804.984 490.021 788.014C490.021 771.043 483.28 754.767 471.282 742.766L154.482 425.966L471.282 109.166C482.94 97.0951 489.391 80.9285 489.245 64.1479C489.1 47.3673 482.369 31.3153 470.503 19.4492C458.637 7.58308 442.585 0.852342 425.804 0.706524C409.023 0.560706 392.857 7.01154 380.786 18.6697L18.7383 380.718C6.74016 392.719 -1.93644e-05 408.995 -1.86226e-05 425.966C-1.78807e-05 442.936 6.74016 459.212 18.7383 471.214L380.786 833.262C392.788 845.26 409.064 852 426.034 852C443.005 852 459.281 845.26 471.282 833.262Z" fill="white"/>
            </svg>
          </Button>
          <Button  variant="dark">
            <svg id='arr2' width="491" height="852" viewBox="0 0 491 852" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M471.282 833.262C483.28 821.26 490.021 804.984 490.021 788.014C490.021 771.043 483.28 754.767 471.282 742.766L154.482 425.966L471.282 109.166C482.94 97.0951 489.391 80.9285 489.245 64.1479C489.1 47.3673 482.369 31.3153 470.503 19.4492C458.637 7.58308 442.585 0.852342 425.804 0.706524C409.023 0.560706 392.857 7.01154 380.786 18.6697L18.7383 380.718C6.74016 392.719 -1.93644e-05 408.995 -1.86226e-05 425.966C-1.78807e-05 442.936 6.74016 459.212 18.7383 471.214L380.786 833.262C392.788 845.26 409.064 852 426.034 852C443.005 852 459.281 845.26 471.282 833.262Z" fill="white"/>
            </svg>
          </Button>
        </div>
      </div>
      <div id='points_glav'>
        <div id='points'>
          <div id='point1'></div>
          <div id='point2'></div>
          <div id='point3'></div>
        </div>
      </div>
      <div id='row_glav'>
        <div id='row'>
          <p id='cem1'>Семён Алпатов, 7 лет</p>
          <p id='cem2'>Воксельный 3D редактор MagicaVoxel,"Крипер"</p>
        </div>
      </div>
    </div>
  )
}

export default Primers;