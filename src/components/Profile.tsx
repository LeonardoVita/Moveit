import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css"

export default function Profile({login, avatar_url}) {

  const {level} = useContext(ChallengesContext); 
  return (
    <div className={styles.profileContainer}>
      <img src={avatar_url ?? "/icons/user.svg"} alt="Leonardo Vita"/> 
      <div>
        <strong>{login ?? "Username"}</strong>  
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div> 
    </div>
  )
}
