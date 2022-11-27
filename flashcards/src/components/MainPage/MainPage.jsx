import React from 'react'
import TrainingMode from '../TrainingMode/TrainingMode.jsx'
import Dictionary from '../Dictionary/Dictionary.jsx'
import './mainPage.css'

function MainPage() {
    let mainpage = false;
    let dictionary = true;
    let trainingMode = false;

    if (mainpage) {
        return (
            <div className="main">
                <button className="main_element">Dictionary</button>
                <button className="main_element">CardTraining</button>
            </div>
        )
    }
    if (dictionary) {
        return <Dictionary />
    }

    if (trainingMode) {
        return <TrainingMode />
    }
}

export default MainPage