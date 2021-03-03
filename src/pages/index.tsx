import {GetServerSideProps} from "next";
import { useEffect } from "react";
import Head from "next/head";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import SideBar from "../components/SideBar"
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown"
import ChallengeBox from "../components/ChallengeBox";

import { getSession} from "next-auth/client";

import styles from "../styles/pages/index.module.css";

interface HomeProps {
  level: number; 
  currentExperience: number; 
  challengesCompleteds: number;
}

export default function Home(props: HomeProps) { 
  useEffect(() => {
    const url = window.location.href;
    const newUrl = url.split("?token_type=");
    window.history.pushState({}, null, newUrl[0]);
  },[]);
  
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleteds={props.challengesCompleteds}
    >
      <div className={styles.wrap}>
        <Head>
          <title>Inicio | Move IT!</title>
        </Head>  
        <SideBar/>
        <div className={styles.container}>   
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
      </div> 
       
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req,res}) => {  

  const {level, currentExperience, challengesCompleteds} = req.cookies;  

  const session = await getSession({req});

  if (!session) {    
    res.writeHead(302, {
      Location: "/login",
    });

    res.end();
    return {
      props: {},
    };
  }

  return {
    props: {
      level: Number(level || 1), 
      currentExperience: Number(currentExperience || 0), 
      challengesCompleteds: Number(challengesCompleteds || 0)
    }  
  }
}
