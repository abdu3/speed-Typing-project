import React, { useEffect, useRef, useState } from 'react'

export default function Game2() {
    const timeToEnd=10
    const [word,setWord]=useState("")
    const [count,setCount]=useState()
    const [timeRunner,setTimeRunner]=useState(timeToEnd)
    const [isRunning,setIsRunning]=useState(false)
    const textBoxRef=useRef(null)

    function handleChange(e){
        const {value}=e.target
        setWord(value)
        // console.log(word)
    }

    function calculateWordInText(text){
        return text.trim()
                        .split(" ").
                        filter((word)=>word !=="")
                        .length
    }

    function startGame(){
        setCount(0)
        setIsRunning(true)
        setWord("")
        setTimeRunner(timeToEnd)
        textBoxRef.current.disabled=false
        textBoxRef.current.focus()
    }
    function  endGame(){
        setIsRunning(false);
        setCount(calculateWordInText(word))
    }
    useEffect(()=>{
        if(timeRunner >0 && isRunning){
            setTimeout(()=>{
                setTimeRunner(timeRunner-1)
            },1000)
        }else if(timeRunner ===0 ){
            endGame()
        }
    },[timeRunner,isRunning])
  return (
    <div>
        <h1>How fast do you type?</h1>
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
