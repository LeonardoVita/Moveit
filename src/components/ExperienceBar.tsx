import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

let experienceTimeout: NodeJS.Timeout;

export default function ExperienceBar() {  
  const { currentExperience : ctxCurrentExperience, experienceToNextLevel, level, levelUp, setCtxCurrentExperience } = useContext(ChallengesContext);  

  const [currentExperience, setCurrentExperience] = useState(ctxCurrentExperience);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;    

  useEffect(() => {
    setCurrentExperience(ctxCurrentExperience)  
  },[level])

  useEffect(() => {
    if(currentExperience < ctxCurrentExperience){
      experienceTimeout = setTimeout(()=>{        
        setCurrentExperience(currentExperience + 1);
      },10);
    } 

    if(currentExperience >= experienceToNextLevel){      
      clearTimeout(experienceTimeout);
      setCtxCurrentExperience(ctxCurrentExperience - experienceToNextLevel);
      levelUp();
    }
    
  },[currentExperience,ctxCurrentExperience])

  return (
    <header className={styles["experience-bar"]}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextLevel}%`}}/>

        <span className={styles["current-experience"]} style={{left: `${percentToNextLevel}%`}}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}