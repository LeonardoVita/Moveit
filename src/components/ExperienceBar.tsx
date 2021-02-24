import styles from "../styles/components/ExperienceBar.module.css"

export default function ExperienceBar() {
  return (
    <header className={styles["experience-bar"]}>
      <span>0 xp</span>
      <div>
        <div style={{width: "60%"}}/>

        <span className={styles["current-experience"]} style={{left: "60%"}}>
          360 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}