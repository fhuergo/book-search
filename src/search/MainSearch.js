import React, { Component } from "react"
import SearchForm from "./SearchForm"
import { fetchBook } from "../store/book"
import { connect } from "react-redux"

class MainSearch extends Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async handleSubmit(event) {
    event.preventDefault()
    await this.props.getBook(this.state.input)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <SearchForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        input={this.state.input}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getBook: isbn => dispatch(fetchBook(isbn))
})

export default connect(
  null,
  mapDispatchToProps
)(MainSearch)
