// common
const HTTPS = 'https://'
const HTTP = 'http://'

// swapi
const SWAPI_ROOT = 'swapi.dev/api/'
const SWAPI_PEOPLE = 'people'
const SWAPI_PARAM_PAGE = '/?page='
const SWAPI_PARAM_SEARCH = '/?search='

const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE
const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE
const API_SEARCH = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH

const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters'
const GUIDE_IMG_EXTENSION = '.jpg'
const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE

export {
  HTTPS,
  HTTP,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  SWAPI_PARAM_PAGE,
  SWAPI_PARAM_SEARCH,
  API_PEOPLE,
  API_PERSON,
  API_SEARCH,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
}