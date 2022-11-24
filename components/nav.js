import React, { useState } from 'react'
import Image from 'next/image'
import PopUp from '../pages/pop-up'
import styles from '../styles/nav.module.scss'

export default function Nav() {

  const [buttonPopup, setButtonPopup] = useState(false)
  
  return <>
  <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
    <nav className={styles.nav}>
    <div className={styles.miniLogo}>
    <Image src='/images/Bl.png' alt='logo' width={280} height={100} objectFit='cover'/>
    </div>
    <a href='https://portfolio-sigma-brown.vercel.app' className={styles.bio} target='_blank' rel='noreferrer'>Quem Sou Eu?</a>
    <div>
     <button className={styles.subBtn} onClick={() => setButtonPopup(true)}>Subscreve</button>
    </div>

    </nav>
    </>
  
}

