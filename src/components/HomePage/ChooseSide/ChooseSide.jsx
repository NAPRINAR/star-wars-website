import styles from "./ChooseSide.module.css"
import {useTheme, THEME_NEITRAL, THEME_LIGHT, THEME_DARK} from "@context/ThemeProvider";
import PropTypes from "prop-types"
import imgLightSide from "./img/light-side.jpg"
import imgDarkSide from "./img/dark-side.jpg"
import imgFalcon from "./img/falcon.jpg"
import cn from "classnames"

const ChooseSideItem = ({theme, text, img,classes}) => {
    const IsTheme = useTheme();
    return (
        <div className={cn(styles.item,classes)} onClick={() => IsTheme.change(theme)}>
            <div className={styles.item__header}>{text}</div>
            <img src={img} alt={text} className={styles.item__img}/>
        </div>
    )
}

ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes:PropTypes.string
}


const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: "Light Side",
            img: imgLightSide,
            classes:styles.item__light
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDarkSide,
            classes:styles.item__dark
        },
        {
            theme: THEME_NEITRAL,
            text: "I'm Han Solo",
            img: imgFalcon,
            classes:styles.item__neitral
        }
    ]
    return (
        <div className={styles.container}>
            {elements.map(({theme,text,img,classes}, index) => (
                <ChooseSideItem theme={theme} text={text} img={img} key={index} classes={classes}/>
            ))}
        </div>
    )
}

ChooseSide.propTypes = {
    text: PropTypes.string
}

export default ChooseSide;