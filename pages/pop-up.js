import Image from 'next/image'
import Image1 from '../public/images/Bl.png'
import styles from '../styles/pop-up.module.scss'
import Link from 'next/link'



function PopUp(props) {
  

  return (props.trigger) ? (
    <div className={styles.containerPopup} >
    <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}>Fechar</button>
        {props.children}
        <form  className={`${styles.popupInner} ${styles.row} ${styles.container}`}>
        <div className={`${styles.bannerNewsletter} ${styles.col1}`} col-1>
        <Image
        src={Image1}
        alt="logo"
        width="100"
        height="100"
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
            <h3>Esta feature ainda está por implementar</h3>
            <li>No futuro irá enviar updates para o teu email</li>
            <li>E não te preocupes que é bué free</li>
            <div className={styles.labels}>
            <input 
                type='text' name='' required='' placeholder='Nome' 
            />
            <div>
            <br></br>
            <input  
                type='email' name='' required='' placeholder='O Teu Email'
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
              <button className={styles.btnSubscribe}>Subscreve!</button>

              </div>
            </div>
            </div>
        </form>
        
    </div>
    
  ) : ''
}

export default PopUp