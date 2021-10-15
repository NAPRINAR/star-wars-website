import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useTheme,THEME_NEITRAL,THEME_LIGHT,THEME_DARK} from "@context/ThemeProvider";
import Favorite from "@components/Favorite/Favorite";
import {useEffect, useState} from "react";
import imgDroid from "./img/droid.svg"
import imgLightSaber from "./img/lightsaber.svg"
import imgSpaceStation from "./img/space-station.svg"



const Header = () => {
    const [icon,setIcon] = useState(imgSpaceStation);
    const isTheme = useTheme();

    useEffect(() => {
            switch(isTheme.theme){
                case THEME_LIGHT:setIcon(imgLightSaber);break;
                case THEME_DARK:setIcon(imgSpaceStation);break;
                case THEME_NEITRAL:setIcon(imgDroid); break;
                default:setIcon(imgSpaceStation)

            }
    },[isTheme])


    return (
        <div className={styles.container}>
            <img src={icon} alt="Star Wars" className={styles.logo}/>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/people/?page=1" >People</NavLink></li>
                <li><NavLink to="/not-found" exact>Not Found</NavLink></li>
                <li><NavLink to="/search" exact>Search</NavLink></li>
                <li><NavLink to="/fail" exact>Fail</NavLink></li>
            </ul>
            <Favorite/>
        </div>
    )
}

export default Header;