const Footer = () => {
  return (
    <div className="bg-dark text-light py-2">
      <div className="container">
        <div className="row">
          <section className="col-12 col-md-6">
            <h1>Skuy University</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam accusamus porro quia autem nihil debitis nemo culpa, in
              sequi harum excepturi iusto aperiam distinctio accusantium ipsum
              esse architecto nulla, id quisquam quo! Optio qui accusamus quia,
              adipisci magni quaerat quas tenetur similique blanditiis magnam
              nobis commodi soluta consectetur beatae dolorum!
            </p>
          </section>
          <section className="col-12 col-md-3">
            <h5>Link</h5>
            <ul>
              <li>
                <a href="/school">Home</a>
              </li>
              <li>
                <a href="/school">About</a>
              </li>
              <li>
                <a href="/school">Staff</a>
              </li>
              <li>
                <a href="/school">News</a>
              </li>
            </ul>
          </section>
          <section className="col-12 col-md-3">
            <h5>Socmed</h5>
            <ul>
              <li>
                <a href="/school">Youtube</a>
              </li>
              <li>
                <a href="/school">Instagram</a>
              </li>
              <li>
                <a href="/school">Twiter</a>
              </li>
              <li>
                <a href="/school">Facebook</a>
              </li>
            </ul>
          </section>
        </div>
        <p className="p-2 text-center">
          &copy; Skuy University. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
