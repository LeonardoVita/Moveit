import { useState } from "react";
import { getSession, signIn} from "next-auth/client";

import styles from "../styles/pages/login.module.css";


export default function login() {  
  const [ login, setLogin] = useState("");

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
            onChange={(e) => setLogin(e.target.value)}
          /> 
               
          <button
            onClick={(): Promise<void> =>
              signIn("github", {
                callbackUrl: "https://localhost:3000",
              })
            }
          >
            <img src="/icons/right-arrow.svg" alt="seta para direita icone"/>
          </button>          
        </div>
      </div>
    </div>
  );
}


export const getServerSideProps = async ({ req, res }) => {

  const session = await getSession({ req });

  if (session && req) {
    res.writeHead(302, {
      Location: "/",
    });

    res.end();    
  }

  return {
    props: {},
  };
};