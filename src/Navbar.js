import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from './styles/navbar.module.css'

const NavBar = () => {
    const [currentLocation, setCurrentLocation] = useState("")
    const location = useLocation();

    useEffect(() => {
        setCurrentLocation(location.pathname)
    }, [location.pathname]
    )

    return (<div className={styles.topnav}>
        <div className={currentLocation == "/" ? styles.activenav : ""}>
            <Link to="/" >Home</Link>
        </div>
        <div className={currentLocation == "/intro" ? styles.activenav : ""}>

            <Link to="/intro" >Tamagotchi</Link></div>
        <div className={currentLocation == "/history" ? styles.activenav : ""}>
            <Link to="/history" >History</Link></div>
        <div className={currentLocation == "/pets" ? styles.activenav : ""}>
            <Link to="/pets" >Pets</Link></div>
            <div className={currentLocation == "/interface" ? styles.activenav : ""}>
            <Link to="/interface" >Mechanism</Link>
        </div>
    </div>)
}

export default NavBar