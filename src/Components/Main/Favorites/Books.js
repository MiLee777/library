export const Books = ({ book }) => {
  return (
    <div className="book__container">
      <div className="book__staff-picks">
        <p className="staff-picks">Staff Picks</p>
        <hr className="staff-picks__line"></hr>
      </div>
      <div className="book__title">
        <p className="book__name">{book.title}</p>
        <p className="book__author">By {book.author}</p>
      </div>
      <p className="book__description">{book.description}</p>
      <div className="book__btn">
        <button>Buy</button>
      </div>
      <div className="book__img">
        <img src={book.img} alt="book" />
      </div>
    </div>
  )
}