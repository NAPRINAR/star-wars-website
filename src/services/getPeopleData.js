import {SWAPI_PEOPLE, HTTP, HTTPS, SWAPI_ROOT, GUIDE_IMG_EXTENSION, URL_IMAGE_PERSON,SWAPI_PARAM_PAGE} from "@constants/api";


export const getPeoplePageId = url =>{
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length,url.length)
    return Number(id)
}

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}


const getId = (url, category) => {
    const protocol = checkProtocol(url);
    const newId = url
        .replace(protocol + SWAPI_ROOT + category, '')
        .replace(/\//g, "")

    return newId
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)
export const getPeopleImg = id => `${URL_IMAGE_PERSON}/${id + GUIDE_IMG_EXTENSION}`