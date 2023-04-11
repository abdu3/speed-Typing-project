import React, { useEffect, useRef, useState } from 'react'

export default function Game() {
    const [word ,setWord]= React.useState("");
    const [timeRemaining,setTimeRemaining]= React.useState(10);
    const [isStart,setIsStart]= useState(false);
    const [countWord,setCountWord]=useState(0);
    const textareaRef=useRef(null);
    function handleWord(e){
        const {value} = e.target
        setWord(value)
    }
    function calcCountWords(text){
        const wordsArr= text.trim().split(" ")
        return wordsArr.filter(word=>word !=="" && word.length !==1 ).length
    }
    function runClock(){
        setIsStart(true)
        textareaRef.current.focus()
        setTimeRemaining(10)
        setWord("")
    }
    function endGame(){
        setIsStart(false)
        setCountWord(calcCountWords(word))
    }
    useEffect(() => {
          if(isStart && timeRemaining >0){
              setTimeout(() => {
                  setTimeRemaining(timeRemaining-1);
              }, 1000);
          }else if(timeRemaining === 0){
            endGame()
        }
    },[timeRemaining,isStart]);
  return (
    <div>
        <h1>how fast do you type?</h1>
        <textarea style={{disabled:'false'}}
            value={word}
            onChange={handleWord}
            disabled = {(!isStart)? "disabled" : ""}
            ref={textareaRef}
             />
        <h4>Time remaining: {timeRemaining}</h4>
        <button disabled={isStart} onClick={()=>{runClock()}}>Start</button>
        {/* <button disabled={!isStart} onClick={()=>{endGame()}}>end</button> */}
        <h1> Word count : {countWord}</h1>
    </div>
  )
}
