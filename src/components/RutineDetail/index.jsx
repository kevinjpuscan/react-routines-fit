import React from 'react';
import CircleButton from '../CircleButton';
import Wrapper from '../Wrapper';
import './style.css';
import back from '../../images/back.svg';
import RutineSection from '../RutineSection';
import {Link} from 'react-router-dom';

function RutineDetail(){
    return(
        <div className="rutine-detail">
            <div className="rutine-detail__header">
                <Wrapper>
                    <div className="rutine-detail__header__action">
                        <div className="rutine-detail__header__action__back pointer">
                            <Link to="/">
                                <img src={back} alt="icon back"/>
                            </Link>
                        </div>
                        <div className="rutine-detail__header__action__edit pointer">
                            <Link to="/create"><span>Editar</span></Link>
                        </div>
                    </div>
                </Wrapper>

                <div className="rutine-title">
                    <div className="rutine-title__name">Piernas</div>
                    <div className="rutine-title__progress">1/3</div>
                </div>
            </div>
            <Wrapper>
                <div className="rutine-detail__info">
                    <CircleButton icon="btn-play" type="btn-secondary" size="btn-lg" />
                    <div className="rutine-detail__info__section">
                        <div className="rutine-detail__info__section__name">Calentamiento</div>
                        <div className="rutine-detail__info__section__time">05:00</div>
                    </div>
                </div>
            </Wrapper>
            <div className="rutine-detail__sections">
                <Wrapper>
                    <RutineSection></RutineSection>
                    <RutineSection></RutineSection>
                    <RutineSection></RutineSection>
                    <RutineSection></RutineSection>
                    <RutineSection></RutineSection>
                    <RutineSection></RutineSection>
                    <RutineSection></RutineSection>
                </Wrapper>
            </div>
        </div>
    )
}

export default RutineDetail;