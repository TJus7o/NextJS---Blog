import React, { useState } from 'react'
import Image from 'next/image'
import PopUp from '../pages/pop-up'
import styles from '../styles/nav.module.scss'
import Link from 'next/link'

export default function Nav() {

  const [buttonPopup, setButtonPopup] = useState(false)
  
  return <>
  <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
    <nav className={styles.nav}>
    <div className={styles.miniLogo}>
    <Link href='/'>
    <Image src='/images/Bl.png' alt='logo' width={280} height={100} objectFit='cover'/>
    </Link>
    </div>
    <a href='https://portfolio-tiago-justo.vercel.app' className={styles.bio} target='_blank' rel='noreferrer'>Portfólio</a>
    <div>
     <button className={styles.subBtn} onClick={() => setButtonPopup(true)}>Subscreve</button>
    </div>

    </nav>
    </>
  
}

