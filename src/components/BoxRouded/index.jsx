import React from 'react';
import './style.css';

function BoxRounded({children}){
    return(
            <div className="box-rounded">
                {children}
            </div>
        
    )
}

export default BoxRounded;