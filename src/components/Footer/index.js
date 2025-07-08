// src/app/components/Footer/index.js
'use client'

import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/logoFaCiencia.webp"
          alt="Logo FaCiencia"
          width={120}
          height={40}
        />
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} FaCiência. Todos os direitos reservados.
      </div>
    </footer>
  )
}
