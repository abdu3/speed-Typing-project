
import { useEffect, useRef, useState} from "react"

function useSpeedGame(startingTime = 10){

    const [word,setWord]=useState("")
    const [count,setCount]=useState()
    const [timeRunner,setTimeRunner]=useState(startingTime)
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
        setTimeRunner(startingTime)
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
            endGame();
        }
    },[timeRunner,isRunning])

    return {word,handleChange,isRunning,textBoxRef,timeRunner,count ,startGame}

}
export default useSpeedGame