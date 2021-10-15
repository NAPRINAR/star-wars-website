import  {useLocation} from "react-router-dom";
import styles from "./NotFoundPage.module.css"
import image from './img/notfound.png'

const NotFoundPage = () =>{
    let location = useLocation()

    return(
        <>
            <img src={image} className={styles.img} alt="Not Found"/>
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage