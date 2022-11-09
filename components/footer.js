import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'

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
                        <Link href='/'>
                        <FaLinkedin className={styles.icon}/>
                        </Link>
                        <Link href='/'>
                        <FaTwitter className={styles.icon} />
                        </Link>
                        <Link href='/'>
                       <FaYoutube className={styles.icon} />
                        </Link>
                        <Link href='/'>
                        <FaInstagram className={styles.icon} />
                        </Link>
                    
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <ul>
                            <Link href='/'>
                            <li >About</li>
                            </Link>
                            <Link href=''>
                            <li>Partnerships</li>
                            </Link>
                            <Link href=''>
                            <li>Careers</li>
                            </Link>
                            <Link href=''>
                            <li>Advertising</li>
                            </Link>
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