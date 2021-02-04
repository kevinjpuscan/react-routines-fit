
import React from 'react';
import Wrapper from '../Wrapper';
import './style.css';
import CircleButton from '../CircleButton';
import Rutine from '../Rutine';
import { Link } from 'react-router-dom';

function RutineList(){
    return(
        <div>
            <div className="rutine-list__header">
                <Wrapper>
                <h1>Mis Rutinas</h1>
                </Wrapper>
                
            </div>
            <div className="rutine-list__content">
                <Wrapper>
                    <Rutine></Rutine>
                    <Rutine></Rutine>
                    <Rutine></Rutine>
                    <Rutine></Rutine>
                </Wrapper>
            </div>
            <div className="rutine-list__footer">
                <Link to="/create">
                    <CircleButton icon="btn-plus" type="btn-primary" size="btn-md" handleClick={()=>{}}></CircleButton>
                </Link>
            </div>

        </div>
    )
}

export default RutineList;