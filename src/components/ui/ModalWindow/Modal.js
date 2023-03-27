const Modal = () => {
  return (
    <div className="modal hidden">
      <button className="close-modal">&times;</button>
      <h2>Josefina Higgins</h2>
      <hr />
      <div className="modal__info">
        <article className="modal__info-data">
          <div className="modal__info-item">
            <p>Company</p>
            <h3>Google</h3>
          </div>
          <div className="modal__info-item">
            <p>Interview&nbsp;Date</p>
            <h3>22.3.2023.</h3>
          </div>
          <div className="modal__info-item">
            <p>Phase</p>
            <h3>Tech</h3>
          </div>
          <div className="modal__info-item">
            <p>Status</p>
            <h3>Passed</h3>
          </div>
        </article>
        <article className="modal__info-data">
          <div className="modal__info-item">
            <p>Notes</p>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Modal;
