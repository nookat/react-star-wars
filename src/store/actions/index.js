import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE
} from '@store/constants/actionTypes'

const setPersonToFavorite = person => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person
})

const removePersonFromFavorite = personId => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId
})

export {
  setPersonToFavorite,
  removePersonFromFavorite
}