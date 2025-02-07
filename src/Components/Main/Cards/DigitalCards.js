export const DigitalCards = () => {
  return (
    <section className="section">
      <div className="container favorites__container">
        <div className="title__container">
          <h2 className="title title__section">Digital Library Cards</h2>
          <hr className="title__line"></hr>
        </div>
        <div className="contacts__info">
          <div className="find-card">
            <p className="card__title find-card__title">Find your Library card</p>
            <div className="digital-card__container">
              <div className="digital-card__box">
                <p className="card__title digital-card__title">Brooklyn Public Library</p>
                <div className="digital-card__input">
                  <label>
                    <input
                      placeholder="Reader's name" />
                  </label>
                </div>
                <div className="digital-card__input">
                  <label>
                    <input
                      placeholder="Card number" />
                  </label>
                </div>
              </div>
              <div className="find-card__btn">
                <button className="digital-card__btn">Check the card</button>
              </div>
            </div>
          </div>
          <div className="get-card">
            <p className="card__title digital-card__title get-card__title">Get a reader card</p>
            <p className="par get-card__par">You will be able to see a reader card after logging into account
              or you can register a new account</p>
            <div className="get-card__btns">
              <button className="digital-card__btn">Sign Up</button>
              <button className="digital-card__btn">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}