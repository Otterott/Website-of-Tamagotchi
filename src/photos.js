import Photo from './Photo.js'
import mainpic from './images/mainphoto.svg'
import eggpic from './images/egg.svg'
import styles from './styles/Photo.module.css'
import heart from './images/heart.png'
import gen1 from './images/gen1.jpeg'

function photos() {
  return (<div className={styles.image}>
    <Photo image={mainpic} />
    <Photo image={eggpic} />
    <Photo image={gen1} />
    <Photo image={heart} />
  </div>
  )
}

export default photos;