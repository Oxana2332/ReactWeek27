import React from 'react'
import './wordItem.css'

function WordItem(props) {
    let read = true;
    let input = false;

    if (read) {
        return (
            <div>
                <input className='word' type="text" value={props.english} />
                <input className='word' type="text" value={props.transcription} />
                <input className='word' type="text" value={props.russian} />
                <input className='word' type="text" value={props.tags} />
                <button className='button left'>edit</button>
                <button className='button right'>delete</button>
            </div>
        )
    }
    if (input) {
        return (
            <div>
                <input className='word' type="text" />
                <input className='word' type="text" />
                <input className='word' type="text" />
                <input className='word' type="text" />
                <button className='button left'>save</button>
                <button className='button right'>cancel</button>
            </div>
        )
    }
}

export default WordItem