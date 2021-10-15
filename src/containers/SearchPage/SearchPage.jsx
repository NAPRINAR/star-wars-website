import PropTypes from "prop-types";
import styles from "./SearchPage.module.css"
import {useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import {getApiResource} from "@utils/network";
import {APISEARCH} from "@constants/api";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import {getPeopleId,getPeopleImg} from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import UiInput from "@UI/UiInput/UiInput";



const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people,setPeople] = useState([])

    const getResponse = async param =>{

        const res = await getApiResource(APISEARCH + param);

        if(res) {
            const peopleList = res.results.map(({name,url}) =>{
                const id = getPeopleId(url)
                const img = getPeopleImg(id)
                return{
                    id,
                    name,
                    img,
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        }else{
            setErrorApi(true)
        }
    }
    useEffect(() => {
        getResponse('')
    },[])

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value),300),
        []
    );

    const handleInputChange = value => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }

    return(
        <>
            <h1 className="header__text">Search</h1>
            <UiInput  value={inputSearchValue}
                      handleInputChange={handleInputChange}
                      placeholder="Input characte`rs name"
                      classes={styles.input__search}/>
            <SearchPageInfo people={people}/>

        </>
    )
}

SearchPage.propTypes = {
    setErrorApi:PropTypes.func
}

export default withErrorApi(SearchPage);