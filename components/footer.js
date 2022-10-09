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
                <Image src='/../public/images/mini.jpg' alt='thumbnail' width={50} height={50} objectFit='cover'/>
                </div>
                    <div className={styles.social}>
                        <a href='https://www.linkedin.com/company/merkle-dach/mycompany/'>
                        <FaLinkedin className={styles.icon}/>
                        </a>
                        <a href='https://twitter.com/MerkleDACH'>
                        <FaTwitter className={styles.icon} />
                        </a>
                        <a href='https://www.youtube.com/c/MerkleDACH'>
                       <FaYoutube className={styles.icon} />
                        </a>
                        <a href='https://www.instagram.com/merkledach/'>
                        <FaInstagram className={styles.icon} />
                        </a>
                    
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <ul>
                            <a href='https://merkleinc.ch/en'>
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