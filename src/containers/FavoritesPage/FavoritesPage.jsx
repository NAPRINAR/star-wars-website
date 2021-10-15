import styles from "./FavoritesPage.module.css";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import PeopleList from "@components/PeoplePage/PeopleList";


const FavoritesPage = () => {
    const [people, setPeople] = useState([]);
    const storeDate = useSelector(state => state.favoriteReducer)
    useEffect(() => {
        const arr = Object.entries(storeDate)

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPeople(res)
        }
    }, [])

    return (
        <>
            <h1 className="header__text">FavoritePage</h1>
            {people.length
                ? <PeopleList people={people}/>
                : <h2 className={styles.comment}>No Data</h2>}

        </>
    )
}

export default FavoritesPage;