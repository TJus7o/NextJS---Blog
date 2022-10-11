import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/author-item.module.scss'


function AuthorItem() {
    return (
      <div className={styles.container}>
    
          <h1>About the Author</h1>
          <figure className={styles.author_photo}>
          <Image src='/' alt="thumbnail" width={500} height={400} objectFit="cover" />
          </figure>
  
          <div className={styles.text_desc}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Amet facilisis magna etiam tempor orci eu. Vitae tortor condimentum lacinia quis vel. Arcu felis bibendum ut tristique. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Et odio pellentesque diam volutpat commodo sed egestas egestas. Quis imperdiet massa tincidunt nunc pulvinar. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Sed arcu non odio euismod lacinia at quis risus. Integer eget aliquet nibh praesent tristique magna sit amet. Proin sagittis nisl rhoncus mattis. A iaculis at erat pellentesque adipiscing.
       Nisi scelerisque eu ultrices vitae auctor eu augue. Sodales ut etiam sit amet nisl purus in. Imperdiet proin fermentum leo vel orci porta. Faucibus turpis in eu mi bibendum neque egestas congue. Porta lorem mollis aliquam ut porttitor leo a. Sagittis id consectetur purus ut faucibus pulvinar elementum. Et malesuada fames ac turpis egestas integer. Non sodales neque sodales ut. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Arcu non odio euismod lacinia at quis risus sed vulputate. Pharetra vel turpis nunc eget lorem dolor sed. Gravida neque convallis a cras semper auctor neque vitae. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Semper viverra nam libero justo laoreet sit. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Nisl rhoncus mattis rhoncus urna. Nulla pharetra diam sit amet. Hendrerit gravida rutrum quisque non tellus orci ac auctor.
       </p>
  </div>
          
      </div>
    )
  }
  
  export default AuthorItem