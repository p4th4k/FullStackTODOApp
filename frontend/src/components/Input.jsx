import "../stylesheets/Input.css";

const Input = ({ todo, handleChange, handleSubmit }) => {
  return (
    <>
      <section className="input flex centre">
        <div className="circle"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputField josefin-regular"
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
