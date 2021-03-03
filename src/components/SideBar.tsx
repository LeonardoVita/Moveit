import styles from '../styles/components/SideBar.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

export default function SideBar() {
  const router = useRouter();

  function isActive(route){

    if(route === router.pathname){
      return styles.active  
    } else  return ""    

  }

  return (
    <div className={styles["sidebar-container"]}>
      <Link href="/">
        <a className={styles["sidebar-logo"]}>
          <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2414 0H32.6814L23.9962 42H13.5562L22.2414 0Z" fill="#5965E0"/>
            <path d="M37.56 0H48L41.2331 32.9078H30.7905L37.56 0Z" fill="#5965E0"/>
            <path d="M6.76946 0H17.2095L10.4425 32.9078H0L6.76946 0Z" fill="#5965E0"/>
          </svg>
        </a>
      </Link>

      <nav className={styles["sidebar-nav"]}>
        <Link href="/">
          <a className={`${styles["sidebar-nav-link"]} ${isActive("/")}`}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" stroke="#666666" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
              <path d="M12 29.3333V16H20V29.3333" stroke="#666666" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
            </svg>
          </a>
        </Link>
        <Link href="/leaderboard">
          <a className={`${styles["sidebar-nav-link"]} ${isActive("/leaderboard")}`}> 
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">            
              <path d="M15.9998 20C21.1545 20 25.3332 15.8214 25.3332 10.6667C25.3332 5.51205 21.1545 1.33337 15.9998 1.33337C10.8452 1.33337 6.6665 5.51205 6.6665 10.6667C6.6665 15.8214 10.8452 20 15.9998 20Z" stroke="#666666" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
              <path d="M10.9468 18.52L9.3335 30.6667L16.0002 26.6667L22.6668 30.6667L21.0535 18.5067" stroke="#666666" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
            </svg>
          </a>
        </Link>
      </nav>

      <button className={styles["sidebar-logout"]}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">          
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1998 27.2C28.0835 27.2 28.7998 26.4836 28.7998 25.6L28.7998 6.39995C28.7998 5.51627 28.0835 4.79995 27.1998 4.79995C26.3162 4.79995 25.5998 5.51627 25.5998 6.39995L25.5998 25.6C25.5998 26.4836 26.3162 27.2 27.1998 27.2ZM10.7312 12.3313C11.356 11.7065 11.356 10.6934 10.7312 10.0686C10.1064 9.44379 9.09325 9.44379 8.46845 10.0686L3.66845 14.8686C3.36845 15.1686 3.19981 15.5756 3.19981 16C3.19981 16.4243 3.36845 16.8313 3.66845 17.1313L8.46845 21.9313C9.09325 22.5562 10.1064 22.5562 10.7312 21.9313C11.356 21.3065 11.356 20.2934 10.7312 19.6686L8.66253 17.6H20.7998C21.6835 17.6 22.3998 16.8836 22.3998 16C22.3998 15.1163 21.6835 14.4 20.7998 14.4H8.66253L10.7312 12.3313Z" fill="#666666" opacity="0.5"/>          
        </svg> 
      </button>
    </div>
  )
}
