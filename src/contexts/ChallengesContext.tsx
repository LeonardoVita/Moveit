import { createContext, ReactNode, useEffect, useState } from "react"
import Cookies from "js-cookie"
import challenges from "../../challenges.json"
import LevelUpModal from "../components/LevelUpModal";

interface Challenge {
  type: "boddy" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleteds: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge; 
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: ()=> void;
} 

interface ChallengesProviderProps {
  children: ReactNode;
  level: number; 
  currentExperience: number;
  challengesCompleteds: number;
} 

export const ChallengesContext =  createContext({} as ChallengesContextData );

export function ChallengesProvider({ children, ...props } : ChallengesProviderProps){

  const [level, setLevel] = useState(props.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(props.currentExperience ?? 0);
  const [challengesCompleteds, setChallengesCompleteds] = useState(props.challengesCompleteds ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(true);

  const experienceToNextLevel = Math.pow((level + 1) * 3 ,2) ; 

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(()=>{

    Cookies.set("level",String(level))
    Cookies.set("currentExperience",String(currentExperience))
    Cookies.set("challengesCompleteds",String(challengesCompleteds))


  },[level, currentExperience, challengesCompleteds])

  function levelUp(){
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal(){
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if(Notification.permission === "granted"){
      new Notification("Novo desafio", { 
        body: `valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null)
  }

  function completeChallenge(){
    if ( !activeChallenge){
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleteds(challengesCompleteds + 1);
  }

  return (
    <ChallengesContext.Provider 
      value={{
          level, 
          currentExperience, 
          challengesCompleteds,
          activeChallenge,
          experienceToNextLevel,
          levelUp,
          startNewChallenge,
          resetChallenge,
          completeChallenge,
          closeLevelUpModal,}}
    >
      { children }

     { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  )
}
