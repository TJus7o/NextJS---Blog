import React, { useState } from 'react'
import Link from 'next/Link'
import Image from 'next/image'
import PopUp from '../pages/pop-up'
import styles from '../styles/nav.module.scss'

export default function Nav() {

  const [buttonPopup, setButtonPopup] = useState(false)
  
  return <>
  <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
    <nav className={styles.nav}>
    <div className={styles.miniLogo}>
    <Image src='/../public/images/Logo tio justo.png' alt='thumbnail' width={180} height={90} objectFit='cover'/>
    </div>
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

