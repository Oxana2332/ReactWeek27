import React from 'react'
import './rate.css';

function Rate(props) {
    return (
        <div className={props.isSelected?"rate-card_selected":"rate-card"}>
            <header className={`rate-header ${props.classHeader}`}>Безлимитный {props.price}</header>
            <section className={`rate-section ${props.classSection}`}>
                <span className='rate-section_top'>руб</span> 
                <span className='rate-price'>{props.price}</span>
                <span className='rate-section_bottom'> /мес</span>
            </section>
            <p className='rate-speed'>до {props.speed} Мбит/сек</p>
            <footer className='rate-footer'>Объём включённого трафика не ограничен</footer>
        </div>
    )
}

export default Rate