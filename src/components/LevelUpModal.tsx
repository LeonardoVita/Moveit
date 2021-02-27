import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/LevelUpModal.module.css"

export default function LevelUpModal() {

  const { level,closeLevelUpModal } = useContext(ChallengesContext);

  function handleClick(e){
    // console.log(e.target.classList[0] , styles.overlay)
    if(e.target.classList[0] === styles.overlay){
      closeLevelUpModal();
    }
  } 

  return (
    <div className={styles.overlay} onClick={(e)=>handleClick(e)}>
      <div className={styles["levelup-modal-container"]}>
        <header>{ level }</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal"/>
        </button>
      </div>
    </div>
  )
}
