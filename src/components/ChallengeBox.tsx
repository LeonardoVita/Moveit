import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ChallengeBox.module.css"

export default function ChallengeBox() {

  const { activeChallenge, resetChallenge } = useContext(ChallengesContext); 

  return (
    <div className={styles["challengebox-container"]}>
      {
        activeChallenge ? (
          <div className={styles["challenge-active"]}>
            <header>Ganhe {activeChallenge.amount } xp</header> 
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="body"/>
              <strong>Novo desafio</strong>
              <p>{ activeChallenge.description }</p>
            </main>  

            <footer>

              <button 
                type="button"
                className={styles["challenge-failed-button"]}
                onClick={resetChallenge}
              >
                Falhei
              </button>   

              <button 
                type="button"
                className={styles["challenge-completed-button"]}
              >
                Completei
              </button> 

            </footer>  
          </div>  
        ) : (
          <div className={styles["challenge-not-active"]}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="level-up"/>
              Avance de level completando desafios
            </p>
          </div>
        )
      }  
    </div>
  )
}
