import React from "react"
import MainSearch from "./search/MainSearch" // from a file that exports all components for neatness?
import { Provider } from "react-redux"
import store from "./store"
import Results from "./results/Results"

const Main = () => {
  return (
    <Provider store={store}>
      <MainSearch />
      <Results />
    </Provider>
  )
}

export default Main
