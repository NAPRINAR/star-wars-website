import styles from "./PersonLinkBack.module.css"
import {useHistory} from "react-router-dom";
import iconBack from "./img/left-arrow.svg"

const PersonLinkBack = () => {
    const history = useHistory();
    const handleGoBack = e => {
        e.preventDefault()
        history.goBack()
    }
    return (
        <a href="#"
           onClick={handleGoBack}
           className={styles.link}>
            <img src={iconBack} alt="Go Back" className={styles.link__img}/>
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack