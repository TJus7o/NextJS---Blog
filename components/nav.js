import React, { useState } from 'react'
import Link from 'next/Link'
import PopUp from '../pages/pop-up'
import styles from '../styles/nav.module.scss'

export default function Nav() {

  const [buttonPopup, setButtonPopup] = useState(false)
  
  return <>
  <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
    <nav className={styles.nav}>
    <Link href='/'>
    <a className={styles.home}>Front End Blog</a>
    </Link>
    <Link href='https://merkleinc.ch/en'>
    <a className={styles.bio}>About</a>
    </Link>

    <div>
     <button className={styles.subBtn} onClick={() => setButtonPopup(true)}>Subscribe</button>
    </div>

    </nav>
    </>
  
}

