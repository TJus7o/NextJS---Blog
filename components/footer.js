import React from 'react'
import Image from 'next/image'


import styles from '../styles/footer.module.scss'

import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer (props){
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                <div className={styles.miniLogo}>
                <Image src='/images/Bl.png' alt='logo' width={180} height={90} objectFit='cover'/>
                </div>
                    <div className={styles.social}>
                        <a href='https://www.linkedin.com/in/tiago-justo/' target='_blank' rel='noreferrer'>
                        <FaLinkedin className={styles.icon}/>
                        </a>
                        <a href='https://twitter.com/TJusto7' target='_blank' rel='noreferrer'>
                        <FaTwitter className={styles.icon} />
                        </a>
                        <a href='https://www.instagram.com/tjus7o/' target='_blank' rel='noreferrer'>
                        <FaInstagram className={styles.icon} />
                        </a>
                    
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer