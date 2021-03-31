import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true }
  }
  if (action.type === SET_STORIES) {
    return {
      ...state,
      isLoading: false,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
    }
  }
  if (action.type === REMOVE_STORY) {
    const newHits = state.hits.filter(
      (item) => item.objectID !== action.payload
    )
    return {
      ...state,
      hits: newHits,
    }
  }
  throw new Error(`no matching "${action.type}" action type`)
}
export default reducer
