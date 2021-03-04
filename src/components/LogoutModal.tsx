import {useState} from "react"
import styles from "../styles/components/LogoutModal.module.css"

export default function LogoutModal() {
  const [isActive, setIsActive] = useState(false)

  function handleClick(e){
    // console.log(e.target.classList[0] , styles.overlay)
    if(e.target.classList[0] === styles.overlay){
      setIsActive(false)
    }
  } 



  return (
    <div className={styles.overlay} onClick={(e) => handleClick(e)}>
      <div className={styles["logout-modal-container"]}>
        <p>logout modal</p>

        <button type="button" onClick={() => setIsActive(false)}>
          <img src="/icons/close.svg" alt="fechar modal"/>
        </button>
      </div>
    </div>
  )
}
