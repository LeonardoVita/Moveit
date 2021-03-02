import { useState } from "react"
import styles from "../styles/pages/login.module.css"


export default function login() {
  
  // variavel de ambiente de desenvolvimento
  const REDIRECT_URI = "http://localhost:3000/api/githubOAuth";
  const CLIENT_ID =  "4540f209dfb0abcf0500";

  // variavel de produção
  // const REDIRECT_URI = "https://moveit-iota-eight.vercel.app/api/githubOAuth";
  // const CLIENT_ID =  "3a3e8d3ed5ebdbc0221e";

  
  const [ login, setLogin] = useState("")

  return (
    <div className={styles["login-container-background"]}>
      <div className={styles["login-container"]}>
        <img src="logo-full.svg" alt="moveit logo"/>  
        <strong>Bem-vindo</strong>
        <div className={styles["github-span-container"]}>
          <img src="/icons/Github.svg" alt="github icone"/>
          <span>Faça Login com seu Github para começar</span>
        </div>
        <div className={styles["login-input-container"]}>
          <input 
            type="text" 
            name="login" 
            id="login" 
            placeholder="Github User login"
            value={login} 
            onChange={(e)=> setLogin(e.target.value)}
          /> 
               
          <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&login=${login}`}
          >
            <img src="/icons/right-arrow.svg" alt="seta para direita icone"/>
          </a>          
        </div>
      </div>
    </div>
  )
}
