import "../stylesheets/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col centre">
        <p className="footer-text josefin-bold">
          Drag and Drop to reorder list
        </p>
        <div className="attribution josefin-regular">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/p4th4k" target="_blank">p4th4k</a>.
        </div>
      </footer>
    </>
  );
};

export default Footer;
