import Image from 'next/image'
import Image1 from '../public/images/Logo tio justo.png'
import styles from '../styles/pop-up.module.scss'
import Link from 'next/Link'
import { useForm } from 'react-hook-form'


function PopUp(props) {
  
  const {register, handleSubmit, formState:{errors}} = useForm()


  return (props.trigger) ? (
    <div className={styles.containerPopup} >
    <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}>Close</button>
        {props.children}
        <form  className={`${styles.popupInner} ${styles.row} ${styles.container}`}>
        <div className={`${styles.bannerNewsletter} ${styles.col1}`} col-1>
        <Image
        src={Image1}
        alt="logo"
        width="100"
        height="50"
        layout="fixed" 
    />
    <Image className={styles.envelope}
    src={Image1}
    alt="subscribe"
    width="200"
    height="200"
    layout="responsive" 
/>
    </div>
        <div className={styles.col2} col-2>
            <h1>NEWSLETTER</h1>
            <h3>Enroll for our FREE updates</h3>
            <li>Well send you periodic updates</li>
            <li>Dont worry, its not the least bit annoying</li>
            <div className={styles.labels}>
            <input 
                type='text' name='' required='' placeholder='Name' 
            />
            <div>
            <br></br>
            <input  
                type='email' name='' required='' placeholder='Email Address'
            />
            </div>
            </div>
            <Link href='/'>
          <a className={styles.terms}> See terms here </a>
            </Link>
            <div className={styles.checkbox}>
              <input
               id='checkBox' type='checkbox' 
              />
              <label
               for='checkBox'>I accept these terms.
              </label>
              <div>
              <button className={styles.btnSubscribe}>Subscribe!</button>

              </div>
            </div>
            </div>
        </form>
        
    </div>
    
  ) : ''
}

export default PopUp