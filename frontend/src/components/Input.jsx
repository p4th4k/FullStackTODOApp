import "../stylesheets/Input.css";

const Input = ({ todo, handleChange, handleSubmit, theme }) => {
  return (
    <>
      <section className={theme === "dark" ? "input input-dark flex centre" : "input input-light flex centre"}>
        <div className={theme === "dark" ? "circle circle-dark" : "circle circle-light"}></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={theme === "dark" ? "inputField inputField-dark josefin-regular" : "inputField inputField-light josefin-regular"}
            placeholder="Create a new todo..."
            onChange={handleChange}
            value={todo}
          />
        </form>
      </section>
    </>
  );
};

export default Input;
