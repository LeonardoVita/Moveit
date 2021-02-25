import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css"

export default function Profile() {

  const {level} = useContext(ChallengesContext); 
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/43863949?s=400&u=5242826dc1ec134d6f2d57ba5857b368599ad9ab&v=4" alt="Leonardo Vita"/> 
      <div>
        <strong>Leonardo Vita</strong>  
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div> 
    </div>
  )
}
