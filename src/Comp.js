import React from 'react'
import photo from './images/photo.svg';

const Comp = () => {
  return (
<div>
    <div id="wrapper">
        <div id="photo_img">
            <img src={photo} alt=''/>
        </div>
        <div id="nav">
            <h1>
                Расписание
            </h1>
            <h1 id="h1_2">
                Мероприятия
            </h1>
        </div>
        <div id="all_elem">
            <div id="elem1">
            </div>
            <div id="elem2">
            </div>
            <div id="elem3">
            </div>
            <button id="big_button">
                +7 (980) 658 80 70
            </button>
        </div>
    </div>
</div>
  )
}

export default Comp
