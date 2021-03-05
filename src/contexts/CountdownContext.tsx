import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";


interface CountdownProviderProps {
  children: ReactNode;
} 

interface CountdownContextData {
  timer: number,
  minutes: number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountDown: ()=> void,
  resetCountDown: ()=> void,
} 

export const CountdownContext =  createContext({} as CountdownContextData );

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children } : CountdownProviderProps){
  const timer = 0.1 * 60

  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(timer);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;  

  function startCountDown(){
    setIsActive(true);
  }
  
  function resetCountDown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(timer);
  }

  useEffect(()=>{
    if(isActive && time > 0){

      countdownTimeout = setTimeout(()=>{
        setTime(time - 1);
      },1000);

    }else if (isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  },[isActive, time])

  return(
    <CountdownContext.Provider 
      value={{
        timer,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}