import React from 'react';
import Avatar from '../img/face.jpg'
import './app-header.css';

const AppHeader =() =>{

    return(
        <div className ="app-header d-flex">
            <img className = 'avatar' src ={Avatar} alt ="avatar icon" />
            <div>
                <h2>Вероника Ростова</h2>
                <h3>Менеджер по продажам</h3>
                <div className = 'summary'>
                Подберу для вас самые лучшие предложения.
                Мои услуги абсолютно бесплатны
                </div>
            </div>
        </div>
    )
}

export default AppHeader