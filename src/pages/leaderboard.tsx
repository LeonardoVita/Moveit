import SideBar from "../components/SideBar";
import Head from "next/head";
import styles from "../styles/pages/leaderboard.module.css";

export default function Leaderboard() {
  return (
    <div className={styles["leaderboard-wrap"]}>
      <Head>
        <title>Leaderboard | Move IT!</title>
      </Head> 
      <SideBar/>
      <div className={styles["leaderboard-container"]}> 
        <p>Leaderboard page</p>
      </div>
    </div>
  )
}
