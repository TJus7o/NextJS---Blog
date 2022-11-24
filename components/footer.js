import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/footer.module.scss'

import {FaLinkedin, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

function Footer (props){
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                <div className={styles.miniLogo}>
                <Image src='/../public/images/Bl.png' alt='thumbnail' width={180} height={90} objectFit='cover'/>
                </div>
                    <div className={styles.social}>
                        <a href='https://www.linkedin.com/in/tiago-justo/' target='_blank'>
                        <FaLinkedin className={styles.icon}/>
                        </a>
                        <a href='https://twitter.com/TJusto7' target='_blank'>
                        <FaTwitter className={styles.icon} />
                        </a>
                        <a href='https://www.instagram.com/tjus7o/' target='_blank'>
                        <FaInstagram className={styles.icon} />
                        </a>
                    
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <ul>
                            <a href='https://portfolio-sigma-brown.vercel.app' target='_blank'>
                            <li >Quem Sou?</li>
                            </a>
                            <a href='' target='_blank'>
                            <li>Parcerias</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer