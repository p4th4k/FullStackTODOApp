import "../stylesheets/Background.css"

const Background = ({theme}) => {
  return (
    <>
      <section className={theme === "dark" ? "bg-img bg-img-dark" : "bg-img bg-img-light"}></section>
    </>
  );
};

export default Background;