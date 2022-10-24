import styles from '../styles/button.module.scss'

const Button = ({ text }) => {
  return (
    <button className={styles.button} onClick={(event) => (event.target.innerText += '🔥')}>
      {text}
    </button>
  )
}

export default Button
