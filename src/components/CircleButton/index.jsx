import React from 'react';
import './style.css';
import play from '../../images/play.svg';
import plus from '../../images/plus.svg';

function CircleButton({icon,handleClick,type,size}){
    const getIcon=()=>{
        if(icon==="btn-play") return play;
        if(icon==="btn-plus") return plus;
    }
    return(
        
        <button className={`btn ${type} ${size} ${icon} pointer`} onClick={handleClick}>
            <img src={getIcon()} alt="icon-button"/>
        </button>
    )
}

export default CircleButton;