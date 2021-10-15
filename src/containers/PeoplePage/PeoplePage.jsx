import {useState, useEffect} from "react"
import PropTypes from "prop-types"

import {withErrorApi} from "@hoc-helpers/withErrorApi";

import {getApiResource, changeHTTP} from "@utils/network";
import {APIPEOPLE} from "@constants/api";
import PeopleList from "@components/PeoplePage/PeopleList";
import {getPeopleId, getPeopleImg,getPeoplePageId} from "@services/getPeopleData";
import {useQueryParams} from "@hooks/useQueryParams";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation/PeopleNavigation";



const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams();
    const queryPage = query.get('page')
    // console.log(queryPage,prevPage,nextPage)

    const getResource = async (url) => {
        const res = await getApiResource(url)
        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImg(id)
                return {
                    id: id,
                    name: name,
                    img: img
                }
            })
            setPeople(peopleList)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }


    }
    useEffect(() => {
        getResource(APIPEOPLE + queryPage)
    }, [])
    return (
            <>

                <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}/>
                {people && (<PeopleList people={people}/>)})
            </>
    )
}

PeoplePage.propTypes = {
    setErrorApi:PropTypes.func
}

export default withErrorApi(PeoplePage)