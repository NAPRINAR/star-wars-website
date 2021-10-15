import styles from "./UiLoading.module.css"
import PropTypes from "prop-types"
import loaderWhite from "./img/loader-white.svg"
import loaderBlack from "./img/loader-black.svg";
import loaderBlue from "./img/loader-blue.svg"
import {useState,useEffect} from "react";
import cn from "classnames"

const UiLoading = ({theme = 'white',isShadow = true,classes=""}) =>{
    const [loaderIcon,setLoaderIcon] = useState(null)

    useEffect(() =>{
        switch(theme){
            case 'black':setLoaderIcon(loaderBlack);break;
            case 'white':setLoaderIcon(loaderWhite);break;
            case 'blue':setLoaderIcon(loaderBlue);break;
            default:setLoaderIcon(loaderBlack)
        }
    },[])
    return(
        <img src={loaderIcon} alt="Loader" className={cn(styles.loader,isShadow && styles.shadow,classes)}/>
    )
}

UiLoading.propTypes = {
    theme:PropTypes.string,
    isShadow:PropTypes.bool,
    classes:PropTypes.string

}

export default UiLoading;