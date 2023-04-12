import React, { useState } from 'react'
import useSpeedGame from './Hooks/useSpeedGame'

export default function Game2() {
    const [startingTime,setStartingTime]=useState(10)
   const {
        word,
        handleChange,
        isRunning,
        textBoxRef,
        timeRunner,
        count,
        startGame
    } = useSpeedGame(startingTime)

   function  handleStartingTime(e){
     const {value}=e.target
     setStartingTime(value);

   }
  return (
    <div>
        <h1>How fast do you type?</h1>
        <div className='input-field'>
        <label htmlFor="timeInput">Select Time: </label>
        <input
            name='timeInput'
            type='number'
            disabled={isRunning}
            value={startingTime}
            onChange={handleStartingTime}
            />
        </div>
        <textarea 
            name="" 
            id=""
            value={word}
            onChange={handleChange}
            disabled={!isRunning}
            ref={textBoxRef}

            />
            <h4>Time remaining: {timeRunner}</h4>
            <button
                onClick={()=>startGame()}
                disabled={isRunning}

            >
                start
            </button>

            <h1>Word count:{count}</h1>
    </div>
  )
}
