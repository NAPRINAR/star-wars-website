import styles from "./PeopleList.module.css"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({id, name, img}) => <li key={id} className={styles.list__item}>
                <Link to={`/people/${id}`}>
                    <img src={img} alt={name} className={styles.person__photo}/>
                    <p>{name}</p>
                </Link>

            </li>)}
        </ul>
    )
}

PeopleList.propTypes = {
    people:PropTypes.array
}

export default PeopleList