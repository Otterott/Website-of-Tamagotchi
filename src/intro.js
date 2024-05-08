import './App.css';
import Photo from './Photo.js'
import styles from './styles/Photo.module.css'
import eggpic from './images/egg.svg'
import History from './history.js';
import { Link } from 'react-router-dom';
import heart from './images/heart.png'
import NavBar from './Navbar.js';
import content from './styles/content.module.css'

function Intro() {
  return (
    <div>
      <header className={content.header}>
        <NavBar />
        <h1 className={content.hOne}>What is Tamagotchi?</h1>
        <div className={content.App}>
          <div>
            <p className={content.para}>In an egg-shaped device that you can easily hold by hand, there lives a little pet that made of pixel squares. You can interact with your pet through the three buttons on device, easily feed, clean, and play with your pet. What is this device? </p><br />
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <p className={content.para}><br />Tamagotchi (たまごっち) is a handheld digital pet device that first released on November 23, 1996 by <a href="https://en.wikipedia.org/wiki/Bandai" className="App-hyperlink" target='_blank'>Bandai </a>  in Japan and released in the USA on May 1, 1997. Tamagotchi is the first virtual pet in the world! It is one of the most popular electronic toys in the late 1990s to the beginning of 2000s. </p>
          </div>
          <div>

            <img src={heart} style={{ width: 400, height: 'auto' }} alt="intro pic" /><br /><br />
          </div>
          <div>
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <img src={eggpic} style={{ width: 20, height: 'auto' }} alt="egg" />
            <h1>What is digital pet?</h1>
            <p className={content.para}>The notion of electronic pets is deeply intertwined with the concepts of pets, electronic technology, and gaming. What exactly is a pet? A pet is essentially a “living creature” that humans nurture for emotional needs rather than economic reasons. The origins of pet domestication can be trace back to around 15,000 years ago, with dogs possibly being the earliest domesticated animals. Ever since the first grey wolf cohabited with humans, the concept of pets emerged. Over time, the bond between humans and pets has grown stronger, leading to a diverse array of pet types, including cats, birds, rabbits, cows, sheep, hamsters, crickets, snakes, fish …… and more. The notion of pets has expanded to encompass a wide range of beings. But what truly defines a pet? In the context of emphasizing companionship, can plants, objects, or even abstract concepts be considered as pets?</p>
            <p className={content.para}>Electronic pets are a byproduct of multimedia technology, After the emergence of  <a href="https://en.wikipedia.org/wiki/Multimedia" className="App-hyperlink" target='_blank'>multimedia</a> technology, people realized the potential of constructing virtual worlds on electronic platforms. Electronic games initially emerged in late 1960s USA, primarily operating on arcade and gaming console platforms. With the evolution of computers and electronic mobile devices, gaming expanded to portable devices. Electronic games encompass categories that simulate traditional game activities, such as FIFA Mobile, chess, and Sudoku, as well as fantasy-based genres, including various role-playing, adventure, management simulation, and fighting games. The discussion of electronic pets today falls within a subcategory of gaming. Tamagotchi stands out as the world's pioneering electronic pet, paving the way for a plethora of virtual pet games such as Digital Monster, which also designed by Bandai and WiZ; <a href="https://en.wikipedia.org/wiki/My_Talking_Tom" className="App-hyperlink" target='_blank'> My Talking Tom</a>, <a href="https://en.wikipedia.org/wiki/Travel_Frog" className="App-hyperlink" target='_blank'> Travel Frog</a>, <a href="https://medium.com/@jeenayin/what-can-i-learn-from-the-death-of-my-qq-pet-cd4f278bb70d" className="App-hyperlink" target='_blank'>QQ Pet</a>, <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go" className="App-hyperlink" target='_blank'> Pokémon GO</a>, and even... <a href="https://en.wikipedia.org/wiki/Siri " className="App-hyperlink" target='_blank'> Siri</a>? The majority of popular electronic pet games we know today rely on mobile phones and computers. Tamagotchi, predating the maturity of personal computer and mobile phone technology, was the sole widely embraced electronic pet game console of its time.</p>
            <h1>What was special about Tamagotchi? Who invented it? What’s the <a href="/history" className="App-hyperlink" target='_blank' >History</a> behind it?</h1>
          </div>
        </div>
      </header>
    </div>
  )
}


export default Intro;