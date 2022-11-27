import React from 'react'
import './card.css'
import '../../style/variables.css'

function Card(props) {
    return (
        <div className='card'>
            <h1 className='card_title'>{props.english}</h1>
            <p className='card_text'>{props.transcription}</p>
            <h2 className='card_text'>{props.russian}</h2>
            <p className='card_text'>({props.tags})</p>
            <button className='card_button left'>I know</button>
            <button className='card_button right'>I don't know</button>
        </div>
    )
}

export default Card