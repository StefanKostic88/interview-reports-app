import { GoMarkGithub } from "react-icons/go";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        padding: "1rem",
      }}
    >
      <div className="footer__social">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="footer__social-link"
        ></a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="footer__social-link"
        ></a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="footer__social-link"
        ></a>
      </div>
      <span className="footer__copy">
        &#169; Copyright {year} <GoMarkGithub />
        Goran Korać <GoMarkGithub />
        Ognjen Gavrić <GoMarkGithub />
        Stefan Kostić All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
