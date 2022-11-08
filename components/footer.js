import React from 'react'
import Image from 'next/image'

import styles from '../styles/footer.module.scss'

import {FaLinkedin, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

function Footer (props){
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                <div className={styles.miniLogo}>
                <Image src='/../public/images/Logo tio justo.png' alt='thumbnail' width={180} height={90} objectFit='cover'/>
                </div>
                    <div className={styles.social}>
                        <a href='/'>
                        <FaLinkedin className={styles.icon}/>
                        </a>
                        <a href='/'>
                        <FaTwitter className={styles.icon} />
                        </a>
                        <a href='/'>
                       <FaYoutube className={styles.icon} />
                        </a>
                        <a href='/'>
                        <FaInstagram className={styles.icon} />
                        </a>
                    
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <ul>
                            <a href='/'>
                            <li >About</li>
                            </a>
                            <a href=''>
                            <li>Partnerships</li>
                            </a>
                            <a href=''>
                            <li>Careers</li>
                            </a>
                            <a href=''>
                            <li>Advertising</li>
                            </a>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <ul>
                            <li>Contact</li>                       
                            <li>Policy</li>
                            <li>Privacy</li>   
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer