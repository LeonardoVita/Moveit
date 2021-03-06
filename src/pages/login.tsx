import { getSession, signIn} from "next-auth/client";

import styles from "../styles/pages/login.module.css";


export default function login() {  

  return (
    <div className={styles["login-container-background"]}>
      <div className={styles["login-container"]}>
        <img src="logo-full.svg" alt="moveit logo"/>  
        <strong>Bem-vindo</strong>
        <button 
          className={styles["github-button"]}
          onClick={(): Promise<void> =>
            signIn("github")
          }
        >
          <img src="/icons/Github.svg" alt="github icone"/>
          <span>Faça Login com seu Github para começar</span>
        </button>                
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