import Head from "next/head"
import {GetServerSideProps} from "next"
import { CountdownProvider } from "../contexts/CountdownContext"
import { ChallengesProvider } from "../contexts/ChallengesContext"

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown"
import ChallengeBox from "../components/ChallengeBox";

import styles from "../styles/pages/index.module.css"

interface HomeProps {
  level: number; 
  currentExperience: number; 
  challengesCompleteds: number;
}

export default function Home(props: HomeProps) {  

  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleteds={props.challengesCompleteds}

    >
      <div className={styles.container}>   
        <Head>
          <title>Inicio | Move IT!</title>
        </Head>   
        <ExperienceBar/>

        <CountdownProvider>      
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
        
      </div>  
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=> {

  const {level, currentExperience, challengesCompleteds} = ctx.req.cookies;


  return {
    props: {
      level: Number(level || 1), 
      currentExperience: Number(currentExperience || 0), 
      challengesCompleteds: Number(challengesCompleteds || 0),
    }  
  }
}
