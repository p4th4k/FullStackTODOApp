import "../stylesheets/Input.css";

const Input = ({todo, handleChange}) => {
  return (
    <>
      <section className="input flex centre">
        <div className="circle"></div>
        <input
          type="text"
          className="inputField josefin-regular"
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={todo}
        />
      </section>
    </>
  );
};

export default Input;
