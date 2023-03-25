import { GoMarkGithub } from "react-icons/go";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        background: "rgba(0,0,0,0.8)",
        padding: "1rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="container">
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
      </div>
    </footer>
  );
};

export default Footer;
