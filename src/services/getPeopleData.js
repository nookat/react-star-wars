import { HTTPS, SWAPI_PEOPLE, SWAPI_ROOT, GUIDE_IMG_EXTENSION, URL_IMG_PERSON, SWAPI_PARAM_PAGE } from '@constants/api'

const getPeoplePageId = url => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length)

  return Number(id)
}

const getId = (url, category) => {
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(/\//g, '')
  return id
}

const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`

export {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId
}