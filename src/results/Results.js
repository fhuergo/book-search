import React from "react"
import { connect } from "react-redux"

const Results = ({ books }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Publisher</th>
          <th>Year Published</th>
        </tr>
        {books.map((book, idx) => {
          let earliestYear = book.publish_year
          if (earliestYear && earliestYear.length > 1) {
            let sorted = earliestYear.sort((a, b) => {
              return a - b
            })
            earliestYear = sorted[0]
          }
          return (
            <tr key={idx}>
              <td>{book.author_name || "Unknown Author"}</td>
              <td>{book.title}</td>
              <td>{book.publisher}</td>
              <td>{earliestYear}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  books: state.books
})

export default connect(
  mapStateToProps,
  null
)(Results)
