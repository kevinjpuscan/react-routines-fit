import React from 'react';
import CircleButton from '../CircleButton';
import './style.css';
import cross from '../../images/cross.svg';
import BoxRounded from '../BoxRouded';

function RutineSection({isEditable=false}){
 return(
     <BoxRounded>
         {isEditable&&(
             <CircleButton/>
         )}
         <div className="rutine-section__name">Piernas</div>
         <div className={`rutine-section__detail ${isEditable?"":"right"}`}>
             <div className="rutine-section__detail__info">30min</div>
             {isEditable&&(
                <div className="rutine-section__detail__action pointer">
                    <img src={cross} alt="icon delete"/>
                </div>
             )}
         </div>
     </BoxRounded>
    
 )   
}

export default RutineSection;