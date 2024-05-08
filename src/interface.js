import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import content from './styles/content.module.css'

function Interface() {
    return (
        <div>
        <header className={content.header}>
            <NavBar />
            <h1 className={content.hOne}>Game Mechanism of Tamagotchi</h1>
            <div>
            <div>
                <p className={content.para}>The game mechanism of Tamagotchi is rather simple compared to other electronic games today. However, Tamagotchi's gameplay mechanism is a classic example of early nurturing games. The interactive mode of Tamagotchi's game is still a reference prototype and basic framework for many nurturing games to this day.
                    <br /> <br />The main scene of the game is the home of the virtual pet. After hatching the virtual pet, players can choose to raise it or reset the device to hatch a new virtual pet. In the game, players can perform many basic operations through three buttons. Taking Vintage Tamagotchi as an example, the functions can be categorized as follows: viewing information, feeding, cleaning, treating illness, adjusting room lighting, and accessing the item box, among others.
</p>
            </div>
            <h1 className={content.hOne}>TBD...</h1>
            </div>
            </header>
            </div>

    )
}

export default Interface;