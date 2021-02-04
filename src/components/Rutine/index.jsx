import React from 'react';
import CircleButton from '../CircleButton';
import './style.css';
import cross from '../../images/cross.svg';
import BoxRounded from '../BoxRouded';
import { Link } from 'react-router-dom';

function Rutine(){
    const url="/rutine";
 return(
     <BoxRounded>
         <Link to={url}>
            <CircleButton type="btn-secondary" icon="btn-play" size="btn-sm" />
         </Link>
         
        <div className="rutine__name">Piernas</div>
         
         <div className="rutine__detail">
             <div className="rutine__detail__info">30min</div>
             <div className="rutine__detail__action pointer">
                 <img src={cross} alt="icon delete"/>
             </div>
         </div>
     </BoxRounded>
    
 )   
}

export default Rutine;