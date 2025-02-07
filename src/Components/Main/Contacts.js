export const Contacts = () => {
  return (
    <section className="section">
      <div className="container favorites__container">
        <div className="title__container">
          <h2 className="title title__section">Our Contacts</h2>
          <hr className="title__line"></hr>
        </div>
        <div className="contacts__info">
          <div className="contacts__info-text">
            <p className="par contacts__par contacts__par-bold">For all Library inquiries:</p>
            <div className="contacts__info-tel">
              <p className="par contacts__par">Please call<a className="contacts__par-bold" href="tel:6177302370"> (617) 730-2370</a></p>
              <p className="par contacts__par">For TTY service, please call<a className="contacts__par-bold" href="tel:6177302370"> (617) 730-2370</a></p>
              <p className="par contacts__par">Putterham Library:<a className="contacts__par-bold" href="tel:6177302385"> (617) 730-2385</a></p>
            </div>
            <div className="contacts__info-tel">
              <p className="par contacts__par contacts__par-bold">Senior Staff</p>
              <p className="par contacts__par">Library Director:<a className="contacts__par-bold" href="mailto:amandahirst@gmail.com"> Amanda Hirst</a></p>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.015977047854!2d-73.99387788801738!3d40.69564577127684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a49b649b8c3%3A0x6342a2291cea2e!2zMjg2IENhZG1hbiBQbHogVywgQnJvb2tseW4sIE5ZIDExMjAxLCDQodCo0JA!5e0!3m2!1sru!2sth!4v1738926302232!5m2!1sru!2sth" 
            width="687" 
            height="414" 
            style={{border: "none"}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location">
            </iframe>
          </div>
        </div>

      </div>
    </section>
  )
}