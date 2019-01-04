import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import book from "./book"
import books from "./books"

const reducer = combineReducers({
  book,
  books
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware) // createLogger({ collapsed: true })
)
const store = createStore(reducer, middleware)

export default store
