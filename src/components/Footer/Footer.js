const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer container section">
      <span className="footer__copy">
        &#169; Copyright {year} Stefan Kostic. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;

//
