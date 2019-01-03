import React from "react"
import { connect } from "react-redux"

const Results = ({ book }) => {
  console.log(book)
  return <div>{Object.keys(book)}</div>
}

const mapStateToProps = state => ({
  book: state.book
})

export default connect(mapStateToProps)(Results)
