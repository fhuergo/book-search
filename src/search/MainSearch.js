import React, { Component } from "react"
import SearchForm from "./SearchForm"
import { fetchBooks } from "../store/books"
import { connect } from "react-redux"

class MainSearch extends Component {
  constructor() {
    super()
    this.state = {
      author: "",
      title: "",
      isbn: "",
      subject: "",
      place: "",
      person: "",
      publisher: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    let slug = ""
    for (let key in this.state) {
      if (this.state[key] || this.state[key] === 0) {
        let excerpt = ""
        for (let i = 0; i < this.state[key].length; i++) {
          if (this.state[key][i] === " ") {
            excerpt += "+"
          } else {
            excerpt += this.state[key][i]
          }
        }
        if (!slug) {
          slug += `?${key}=${excerpt}`
        } else {
          slug += `&${key}=${excerpt}`
        }
      }
    }
    if (slug) {
      this.props.getBooks(slug)
    } else {
      alert("Nothing was input.")
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const {
      author,
      title,
      isbn,
      subject,
      place,
      person,
      publisher
    } = this.state
    return (
      <SearchForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        author={author}
        title={title}
        isbn={isbn}
        subject={subject}
        place={place}
        person={person}
        publisher={publisher}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getBooks: slug => dispatch(fetchBooks(slug))
})

export default connect(
  null,
  mapDispatchToProps
)(MainSearch)
