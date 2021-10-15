import styles from "./PersonPage.module.css"
import {getApiResource} from "@utils/network";
import {useEffect, useState, Suspense} from "react";
import React from "react"
import {APIPERSON} from "@constants/api"
import {withErrorApi} from "@hoc-helpers/withErrorApi";
import PropTypes from "prop-types"
import {getPeopleImg} from "@services/getPeopleData";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiLoading from "@UI/UiLoading/UiLoading";
import {useSelector} from "react-redux";


const PersonFilms = React.lazy(() => import("@components/PersonPage/PersonFilms/PersonFilms"))

const PersonPage = ({match, setErrorApi}) => {

    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite,setPersonFavorite] = useState(false);
    const storeDate = useSelector(state => state.favoriteReducer);


    useEffect(() => {

        (async () => {
            const id = match.params.id;
            const res = await getApiResource(`${APIPERSON}/${id}/`)

           storeDate[id] ? setPersonFavorite(true):setPersonFavorite(false)
            setPersonId(id)
            if (res) {
                setPersonInfo([
                    {title: "Height", data: res.height},
                    {title: "Mass", data: res.mass},
                    {title: "Hair Color", data: res.hair_color},
                    {title: "Skin Color", data: res.skin_color},
                    {title: "Eye Color", data: res.eye_color},
                    {title: "Birth Year", data: res.birth_year},
                    {title: "Gender", data: res.gender},
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImg(id))

                res.films.length && setPersonFilms(res.films)



                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()

    }, [])


    return (
        <>
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />
                    {personInfo && (
                        <PersonInfo personInfo={personInfo}/>
                    )}
                    {personFilms && (
                        <Suspense fallback={<UiLoading/>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    )
                    }
                </div>
            </div>
        </>
    )
}
PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object,

}

export default withErrorApi(PersonPage)