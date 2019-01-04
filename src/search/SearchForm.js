import React from "react"

const SearchForm = ({
  handleChange,
  handleSubmit,
  author,
  title,
  isbn,
  subject,
  place,
  person,
  publisher
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Author:</label>
      <input type="text" name="author" onChange={handleChange} value={author} />
      <label>Title:</label>
      <input type="text" name="title" onChange={handleChange} value={title} />
      <label>ISBN:</label>
      <input
        type="number"
        name="isbn"
        max="9999999999999"
        onChange={handleChange}
        value={isbn}
      />
      <label>Subject:</label>
      <input
        type="text"
        name="subject"
        onChange={handleChange}
        value={subject}
      />
      <label>Place:</label>
      <input type="text" name="place" onChange={handleChange} value={place} />
      <label>Person:</label>
      <input type="text" name="person" onChange={handleChange} value={person} />
      <label>Publisher:</label>
      <input
        type="text"
        name="publisher"
        onChange={handleChange}
        value={publisher}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
