"use client"
import styles from './Header.module.css';
import Image from 'next/image';
import { FaUserPlus } from 'react-icons/fa'

export default function Header() {
    return ( 
        <>
         <header className={styles.header}>
          <div className={styles.logo}>
            <Image src="/logoFaCiencia.webp" alt="Logo FaCiencia" width={150} height={50} />
          </div>
          <nav className={styles.nav}>                  
            <button className={styles.navButton}><FaUserPlus style={{ marginRight: '0.5rem' }}/> Inscreva-se</button>
          </nav>
         </header>        
        </>
    )
}