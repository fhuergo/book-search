import React from "react"

const SearchForm = ({ handleChange, handleSubmit, input }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Search by ISBN:</label>
      <input
        type="number"
        name="input"
        max="9999999999999"
        onChange={handleChange}
        value={input}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
