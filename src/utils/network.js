import axios from "axios";
import {HTTP,HTTPS} from "@constants/api";

/**
* Изменяет URL с HTTP на HTTPS
* @param {String} url - url для изменения
* @returns {String} -url с HTTPS
*
*/
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP,HTTPS) : url;
    return result
}

/**
 * Отправляет запрос axios
 * @param {String} url - url Для запроса
 * @returns {Promise} = Promise с результатом запроса
 */

export const getApiResource = async (url) => {

    try {
        const res = await axios.get(url);
        if(res.resultCode === 1){
            console.error("Could not fetch",res.status)
            return false
        }
        return await res.data;
    } catch(error) {
        console.error("Could not fetch", error.message)
        return false
    }

}

// (async () =>{
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     console.log(body)
// })()

export const makeConcurrentRequest = async(url) =>{
    const res = await Promise.all(url.map(res => {
        return axios.get(res).then(res => res.data)
    }));

    return res
}
