import { useState } from "react"
import styles from "../styles/components/ChallengeBox.module.css"

export default function ChallengeBox() {

  const [hasActiveChalleng, setHasActiveChalleng] = useState(true);
  

  return (
    <div className={styles["challengebox-container"]}>
      {
        hasActiveChalleng ? (
          <div className={styles["challenge-active"]}>
            <header>Ganhe 400 xp</header> 
            <main>
              <img src="icons/body.svg" alt="body"/>
              <strong>Novo desafio</strong>
              <p>Levante e faça uma caminhada de 3 minutos</p>
            </main>  

            <footer>

              <button 
                type="button"
                className={styles["challenge-failed-button"]}
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
