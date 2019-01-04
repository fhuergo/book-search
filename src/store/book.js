import axios from "axios"

const GET_BOOK = "GET_BOOK"

const getBook = book => ({
  type: GET_BOOK,
  book
})

export const fetchBook = isbn => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
    )
    dispatch(getBook(data))
  } catch (err) {
    console.error(err)
  }
}

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return action.book
    default:
      return state
  }
}

export default reducer
