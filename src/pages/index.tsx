import Head from "next/head"
import {GetServerSideProps} from "next"
import { CountdownProvider } from "../contexts/CountdownContext"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import Superagent from "superagent"

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown"
import ChallengeBox from "../components/ChallengeBox";

import styles from "../styles/pages/index.module.css"
import { useEffect } from "react"

interface HomeProps {
  level: number; 
  currentExperience: number; 
  challengesCompleteds: number;
  login: string,
  avatar_url: string;
}

interface ResponseGithubProps {
  body?: {
    login: string;
    avatar_url: string;
  };
  props?: {};
}

export default function Home(props: HomeProps) {  

  useEffect(()=>{
    const url = window.location.href;
    const newUrl = url.split("?token_type=");
    window.history.pushState({}, null, newUrl[0]);
  },[])
  
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
              <Profile login={props.login} avatar_url={props.avatar_url}/>
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

export const getServerSideProps: GetServerSideProps = async ({req,res})=> {  

  const {
    level, 
    currentExperience, 
    challengesCompleteds, 
    token_type , 
    access_token
  } = req.cookies;
  
  const responsegithub: ResponseGithubProps  = await Superagent
  .get('https://api.github.com/user')
  .set('Authorization', `${token_type} ${access_token}`)
  .set('User-Agent', 'move.it-dev')
  .catch((err) => {

    console.log({ error : err.message }) ;   
    res.writeHead(307,{location: "/login"});
    res.end();

    return{
      props: {}
    }

  })

  return {
    props: {
      level: Number(level || 1), 
      currentExperience: Number(currentExperience || 0), 
      challengesCompleteds: Number(challengesCompleteds || 0),
      login: responsegithub.body.login,
      avatar_url: responsegithub.body.avatar_url
    }  
  }
}
