import styles from '../styles/components/CompletedChallenges.module.css'

export default function CompletedChallenges() {
  return (
    <div className={styles["completed-challenges-container"]}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}
