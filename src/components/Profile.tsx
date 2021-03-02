import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { getSession} from "next-auth/client"
import styles from "../styles/components/Profile.module.css"

export default function Profile() {

  const {level} = useContext(ChallengesContext);
  const [user, setUser] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  
  useEffect(()=>{
    async function getData(){
      const session = await getSession()
      setUser(session.user.name)
      setAvatarUrl(session.user.image)
    }
    getData();
  },[])
  
  
  return (
    <div className={styles.profileContainer}>
      <img src={avatarUrl || "/icons/user.svg"} alt="Leonardo Vita"/> 
      <div>
        <strong>{user || "Username"}</strong>  
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div> 
    </div>
  )
}
