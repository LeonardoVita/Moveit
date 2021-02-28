import { useState } from "react"
import Link  from "next/link"
import styles from "../styles/pages/login.module.css"

export default function login() {
  
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
            placeholder="Github User Name"
            value={login} 
            onChange={(e)=> setLogin(e.target.value)}
          /> 
          <Link href="/">      
            <a>
              <img src="/icons/right-arrow.svg" alt="seta para direita icone"/>
            </a>
          </Link> 
        </div>
      </div>
    </div>
  )
}
