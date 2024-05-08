import './App.css';
import { Link } from 'react-router-dom';
import gen1 from './images/gen1.jpeg'
import gen2 from './images/gen2.jpeg'
import angel from './images/angel.jpeg'
import connection from './images/connection.png'
import connection2 from './images/connection2.png'
import pluswhite from './images/plus_white.png'
import plusgreen from './images/plus_green.png'
import hellokitty from './images/hello_kitty.jpeg'
import miku from './images/miku.png'
import NavBar from './Navbar';
import content from './styles/content.module.css'
import history from './styles/history.module.css'
import ocean from './images/ocean.png'



function History() {
    return (
        <div>
            <header className={content.header}>
                <NavBar />

                <h1 className={content.hOne} >History of Tamagotchi</h1>
                <div>
                    <p className={content.para}>Tamagotchi was invented and designed by Akihiro Yokoi(横井昭裕) and Aki Maita (真板亜紀) in 1996. Akihiro Yokoi, the creator of Tamagotchi, who also served as the former president and CEO of WiZ — a Japanese company specializing in toy products that introduced the <Link to="https://en.wikipedia.org/wiki/Digimon" className="App-hyperlink">Digimon franchise</Link>. In June 1995, Akihiro presented the initial pitch of Tamagotchi to Bandai. Aki Maita, a developer at Bandai, contributed significantly to refining many key designs of Tamagotchi. Bandai promoted her as the "face" of Tamagotchi until Akihiro was publicly credited as the creator in July 1997. Fun fact, both Yokoi and Maita were together awarded an <Link to="https://en.wikipedia.org/wiki/Ig_Nobel_Prize" className="App-hyperlink">Ig Nobel Prize</Link>. <br /> <br /> Inspired by a TV commercial of a young boy trying to take a pet turtle on a trip, the initial concept for Tamagotchi envisioned it as a portable pet. </p>
                </div>

                <div>
                    <h1 className={content.bg}  ><br />Tamagotchi releases(1996-Now)<br /></h1>
                </div>

                <div className={history.para_history}>
                    <h1 className={content.header}>The Vintage Tamagotchi</h1>
                    <p>The vintage Tamagotchi releases refers to the original franchise of Bandai's Tamagotchi virtual pets. The first model was released in 1996 and the final model was released in 1999, making it the shortest-lived Tamagotchi franchise.</p><br />
                    <div className='image_history'>
                        <div className={history.flex_item}>
                            <img src={gen1} alt="gen1" style={{ width: '100%' }} />
                            <div className={history.text_overlay}>
                                <p >Tamagotchi:Generation 1<br /><br />The original Tamagotchi, featuring the initial functions of the virtual pet, was first launched in Japan on November 23, 1996. </p>

                            </div>
                        </div>
                        <div className={history.flex_item}>
                            <img src={gen2} alt="gen2" style={{ width: '100%' }} />
                            <div className={history.text_overlay}>
                                <p>Tamagotchi:Generation 2<br /><br />In 1997, Bandai introduced Tamagotchi Generation 2, titled "New Species Discovered!! Tamagotchi," which introduced new characters and games.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={content.bg}   ></p>
                </div>

                <div className={history.para_history}>
                    <h1 className={content.header}><br />The Tamagotchi Angel & Ocean</h1>
                    <p> Released between 1997-1998, these two model are the special version after the first two Tamagotchi released.</p><br />
                    <div className='image_history'>
                        <div className={history.flex_item}>
                            <img src={angel} alt="angel" style={{
                                width: '100%'
                            }} />

                            <div className={history.text_overlay}>
                                < p > Tamagotchi Angel<br /><br />This model has a pair of glittering angel wings on each side of the screen. This model comes in several different colors. The virtual pets in this model is a group of angels. </p>

                            </div>
                        </div>
                        <div className={history.flex_item}>
                            <img src={ocean} alt="ocean" style={{
                                width: '100%'
                            }} />

                            <div className={history.text_overlay}>
                                < p > Tamagotchi Ocean<br /><br />This version is an ocean life-themed Tamagotchi released in 1998, featuring a new ocean character Sakanatchi and a motion sensor. </p>
                            </div>
                        </div>
                    </div>
                </div >

                <div>
                    <p className={content.bg}  ></p>
                </div>

                <div className={history.para_history}>
                    <h1 className={content.header}><br />The Tamagotchi Connection</h1>
                    <p>Tamagotchi Connection is the major international Tamagotchi franchise after the Tamagotchi original series. This franchise launched in 2004 and the latest release is in 2015. The Connection models have a larger body and the screen is also larger but with smaller pixels, better resolution. It features an infrared port across the top of the shell, and the keychain hole is to the right.</p><br />
                    <div className='image_history'>
                        <div className={history.flex_item}>
                            <img src={connection} alt="connection" style={{
                                width: '80%'
                            }} />
                            <div className={history.text_overlay}>
                                < p > Tamagotchi Connection V1<br /><br /> </p>

                            </div>
                        </div>

                        <div className={history.flex_item}>
                            <img src={connection2} alt="connection2" style={{
                                width: '80%'
                            }} />
                            <div className={history.text_overlay}>
                                < p > Tamagotchi Connection V2<br /><br /> </p>

                            </div>
                        </div>
                    </div>
                </div >

                <div>
                    <p className={content.bg}   ></p>
                </div>

                <div className={history.para_history}>
                    <h1 className={content.header}><br />The Modern Tamagotchi</h1>
                    <p>The modern Tamagotchi franchise is the third major incarnation of the Tamagotchi series of virtual pets by Bandai. Beginning in Japan in 2008 before debuting internationally in 2019, it marks the technical evolution of Tamagotchi devices, starting with backlit color screens. It is the successor to both the Tamagotchi Connection franchises, carrying over many of the features pioneered by them while expanding on functionality. Besides, starting this release, Tamagotchi series starts to apply color screen and images.</p><br />
                    <div className='image_history'>
                        <div className={history.flex_item}>
                            <img src={pluswhite} alt="pluswhite" style={{
                                width: '90%'
                            }} />
                            <div className={history.text_overlay}>
                                < p > Tamagotchi Plus Color<br /> *white*<br /><br /> </p>

                            </div>
                        </div>

                        <div className={history.flex_item}>
                            <img src={plusgreen} alt="plusgreen" style={{
                                width: '90%'
                            }} />
                            <div className={history.text_overlay}>
                                < p > Tamagotchi Plus Color<br /> *green*<br /><br /> </p>

                            </div>
                        </div>
                    </div>
                </div >

                <div>
                    <p className={content.bg}   ></p>
                </div>

                <div className={history.para_history}>
                    <h1 className={content.header}><br />Tamagotchi Nano</h1>
                    <p>Tamagotchi Nano, stylized as Tamagotchi nano, is a series of miniature Tamagotchi virtual pets that were first introduced in 2010 and were reintroduced in 2017 as a medium for crossover-themed virtual pets. Initially, the name "Tamagotchi Nano" was only used for the first two virtual pets in the series, and all releases are referred to internally as "Tamagotchi Nano" models. In August 2021, Bandai reintroduced the name as its own distinct brand of Tamagotchi pets. As of April 2024, Tamagotchi Nano has a total of 38 different versions, more than any other Tamagotchi franchise.</p>   <div className='image_history'>
                        <div className={history.flex_item}>
                            <img src={hellokitty} alt="nano_hellokitty" style={{
                                width: '90%'
                            }} />
                            <div className={history.text_overlay}>
                                < p > Tamagotchi Nano<br /> *Hello Kitty*<br /><br /> </p>

                            </div>
                        </div>

                        <div className={history.flex_item}>
                            <img src={miku} alt="miku" style={{
                                width: '101%'
                            }} />
                            <div className={history.text_overlay}>
                                < p > Tamagotchi Nano<br /> *Miku*<br /><br /> </p>

                            </div>
                        </div>
                    </div>
                </div >
                <div>
                    <h1 className={content.bg}  ><br /></h1>
                </div>
            </header >
        </div >

    )
}

export default History;