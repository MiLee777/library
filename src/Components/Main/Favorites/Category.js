export const Category = ({category}) => {
  return (
    <>
      <label className="category__label">
        <input 
        className="category__input"
        type="radio"
        name="category"
        value={ category }/> 
        <span className="category__fake"></span>
        <span className="category__text">{ category }</span>
      </label>
    </>
  )
}