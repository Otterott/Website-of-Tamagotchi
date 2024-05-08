import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import content from './styles/content.module.css'
import melodytchi from "./images/melodytchi.png"
import chestnut from "./images/chestnut.png"
import pet from "./styles/pet.module.css"
import history from "./styles/history.module.css"
import chestnutG from "./images/chestnutG.png"
import mametchi from "./images/Mametchi.png"
import mametchiG from "./images/MametchiG.png"
import memetchi from "./images/Memetchi.png"
import memetchiG from "./images/memetchiG.png"
import violetchi from "./images/violetchi.png"
import violetchiG from "./images/violetchiG.png"
import melodytchiG from "./images/melodytchiG.png"

function Pets() {
    return (
        <div>
            <header className={content.header}>
                <NavBar />
                <h1 className={content.hOne}>Pets in Tamagotchi</h1>
                <div>
                <div>
                    <p className={content.para}>So far, there have been a total of 1594 characters in the world of  Tamagotchi. Each character has its own name, personality, and profession. The design of Tamagotchi characters often consists of simple, sometimes crude, lines, accompanied by the standard Tamagotchi-style goofy eyes and curved smiles.
                        <br /> <br /><a href ="https://tamagotchi.fandom.com/wiki/Category:Tamagotchi_characters" className="App-hyperlink" target='_blank'>The complete list of Tamagotchi characters</a> can be found on the Tamagotchi Wikipedia page. Here, I'll introduce a few of my favorite Tamagotchi characters.</p>
                </div>

                <div>
                    <h1 className={content.bg} ><br />Vintage Characters<br /></h1>
                </div>

        <div  className={history.para_history}>
                <div className={pet.image_history}>
                    <div className={pet.image_container}>
                    <img src={memetchi} alt="memetchi" style={{ width: '70%' }} />
                    </div>

                    <div className={pet.flex_item}>
                    <div className={pet.text_overlay}>
                    <h2>Memetchi</h2>
                         <p className={pet.para}>[Tamagotchi Generation 1]<br/>Hometown: Mame City </p>
                         <img src={memetchiG} alt="MemetchiG" style={{ width: '30%' }} />
                         </div>
                         </div>
                    </div>
                </div>
        </div>

        <div>
                    <h1 className={content.bg} ><br /><br /></h1>
                </div>

        <div  className={history.para_history}>
                <div className={pet.image_history}>
                    <div className={pet.image_container}>
                    <img src={mametchi} alt="mametchi" style={{ width: '80%' }} />
                    </div>

                    <div className={pet.flex_item}>
                    <div className={pet.text_overlay}>
                    <h2>Mametchi</h2>
                         <p className={pet.para}>[Tamagotchi Generation 1]<br/>Hometown: Mame City </p>
                         <img src={mametchiG} alt="MametchiG" style={{ width: '50%' }} />
                         </div>
                         </div>
                    </div>
        </div>
               
                <div>
                    <h1 className={content.bg} ><br /><br /></h1>
                </div>

        <div  className={history.para_history}>
                <div className={pet.image_history}>
                    <div className={pet.image_container}>
                    <img src={chestnut} alt="chestnut" style={{ width: '80%' }} />
                    </div>

                    <div className={pet.flex_item}>
                         <div className={pet.text_overlay}>
                         <h2>Chestnut Angel</h2>
                         <p className={pet.para}>[Tamagotchi Angel]<br/>Hometown: Tenshitchi Hospital </p>
                         <img src={chestnutG} alt="chestnutG" style={{ width: '80%' }} />
                         </div>
                    </div>
                </div>
        </div>

        

        <div>
                    <h1 className={content.bg} ><br /><br />Connection/Plus Characters</h1>
                </div>

                <div  className={history.para_history}>
                <div className={pet.image_history}>
                    <div className={pet.image_container}>
                    <img src={violetchi} alt="violetchi" style={{ width: '80%' }} />
                    </div>

                    <div className={pet.flex_item}>
                    <div className={pet.text_overlay}>
                    <h2>Violetchi</h2>
                         <p className={pet.para}>[Tamagotchi Plus]<br/>Hometown: Flower Hill </p>
                         <img src={violetchiG} alt="violetchiG" style={{ width: '50%' }} />
                         </div>
                         </div>
                    </div>
        </div>

        <div>
                    <h1 className={content.bg} ><br /><br />Tamagotchi Color character</h1>
                </div>

                <div  className={history.para_history}>
                <div className={pet.image_history}>
                    <div className={pet.image_container}>
                    <img src={melodytchi} alt="melodytchi" style={{ width: '80%' }} />
                    </div>

                    <div className={pet.flex_item}>
                    <div className={pet.text_overlay}>
                    <h2>melodytchi</h2>
                         <p className={pet.para}>[Tamagotchi iD (color generation)]<br/>Hometown: Melody Land </p>
                         <img src={melodytchiG} alt="melodytchiG" style={{ width: '50%' }} />
                         </div>
                         </div>
                    </div>
        </div>

        <div>
                    <h1 className={content.bg} ><br /><br /></h1>
                </div>
        
                        
                     
               
                
                
                
                
                
                
                
            </header>
        </div>
    )
}







export default Pets;