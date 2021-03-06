import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";


export default function Countdown() {  

  const {timer, minutes, seconds, hasFinished, isActive, resetCountDown, startCountDown } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(""); 
  
  const totalSeconds = minutes * 60 + seconds;
  const percentToCompleteChallenge = 1 - Math.round(totalSeconds) / (timer);

  return (
    <div>
      <div className={styles["count-down-container"]}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>   
        <span>:</span>  
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {
        hasFinished ? (
          <button 
            disabled
            className={`${styles["countdown-button"]} ${styles["finished"]}`}             
          >        
            <p>Ciclo encerrado</p>  
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 1.66663C5.39984 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.39984 18.3333 9.99984 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.99984 1.66663ZM8.33317 14.1666L4.1665 9.99996L5.3415 8.82496L8.33317 11.8083L14.6582 5.48329L15.8332 6.66663L8.33317 14.1666Z" fill="#4CD62B"/>
            </svg>
            <div className={styles.affter} style={{width: `${percentToCompleteChallenge * 100}%`}}></div>
          </button>
        ) : (                  
          isActive  ? (
            <button 
              type="button" 
              className={`${styles["countdown-button"]} ${styles["abandon"]}`}
              onClick={resetCountDown}
            >        
              <p>Abandonar ciclo</p> 
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#666666"/>
              </svg>
              <div className={styles.affter} style={{width: `${percentToCompleteChallenge * 100}%`}}></div>
            </button>
          ) : (
            <button 
              type="button" 
              className={styles["countdown-button"]}
              onClick={startCountDown}
            >        
              <p>Iniciar um ciclo</p> 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg> 
            </button>
          )          
        )
      }

      

    </div>
  )
}
