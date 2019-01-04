import React, { Component } from "react"
import { connect } from "react-redux"

class Results extends Component {
  render() {
    console.log(this.props.books)
    return (
      <table>
        <tbody>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Publisher</th>
          </tr>
          {this.props.books.map((book, idx) => {
            return (
              <tr key={idx}>
                <td>{book.author_name}</td>
                <td>{book.title}</td>
                <td>{book.publisher}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  books: state.books
})

export default connect(
  mapStateToProps,
  null
)(Results)
