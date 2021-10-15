import PropTypes from "prop-types"
import styles from './UiInput.module.css'
import "../index.css"
import cn from "classnames"

import icon from "./img/cancel.svg"

const UiInput = ({value,handleInputChange,placeholder,classes}) =>(
        <div className={cn(styles.wrapper__input,classes)}>
            <input type="text"
                   value={value}
                   onChange={(e)=>handleInputChange(e.target.value)}
                   placeholder={placeholder}
                   className={styles.input}
            />
            <img src={icon}
                 alt="Clear"
                 onClick={() => value && handleInputChange('')}
                 className={cn(styles.clear,!value && styles.clear__disabled)}/>
        </div>
    )


UiInput.propTypes = {
    value:PropTypes.string,
    handleInputChange:PropTypes.string,
    placeholder:PropTypes.string,
    classes:PropTypes.string
}

export default UiInput;