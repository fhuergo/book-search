import axios from "axios"

const GET_BOOKS = "GET_BOOKS"

const getBooks = books => ({
  type: GET_BOOKS,
  books
})

export const fetchBooks = slug => async dispatch => {
  try {
    const { data } = await axios.get(
      `http://openlibrary.org/search.json${slug}`
    )
    dispatch(getBooks(data.docs))
  } catch (err) {
    console.error(err)
  }
}

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.books
    default:
      return state
  }
}

export default reducer
