import React from 'react';
import './service-counter.css'
const ServiceCounter =() =>{
    const handle  = 11;
    const tours = 3
    const hotels = 1 
    const all = handle  + tours + hotels
    return (
    <div className ="service">
        <h2>Услуг</h2>
        <div className ="service-list">
            <ul className ="list-group">
                <li className ="list-group-item">
                    <h3>Ручное бронирование <span>{handle}</span></h3>
                </li>
                <li className ="list-group-item">
                    <h3>Пакетные туры <span>{tours}</span></h3>
                    
                </li>
                <li className ="list-group-item">
                    <h3>Отели <span>{hotels}</span></h3>
                    
                </li>
            </ul>
        </div>
    <h4>Всего <span>{all}</span></h4>
    </div>
)

}

export default ServiceCounter