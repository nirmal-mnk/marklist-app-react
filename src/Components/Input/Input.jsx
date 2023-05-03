function Input({ label, id, type, options, error, registerHandle }) {
  let inputElement = null;

  if (type === "text") {
    inputElement = (
      <div className="login-formcontrol">
        <label htmlFor={id}>{label}</label>
        <input type="text" name={id} id={id} {...registerHandle} />
        {error && <p className="login__error">{error}</p>}
      </div>
    );
  } else if (type === "select") {
    inputElement = (
      <div className="login-formcontrol">
        <label htmlFor={id}>Standard</label>
        <select name={id} id={id} {...registerHandle}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="login__error">{error}</p>}
      </div>
    );
  } else if (type === "password") {
    inputElement = (
      <div className="login-formcontrol">
        <label htmlFor={id}>{label}</label>
        <input type="password" name={id} id={id} {...registerHandle} />
        {error && <p className="login__error">{error}</p>}
      </div>
    );
  } else if (type === "email") {
    inputElement = (
      <div className="login-formcontrol">
        <label htmlFor={id}>{label}</label>
        <input type="email" name={id} id={id} {...registerHandle} />
        {error && <p className="login__error">{error}</p>}
      </div>
    );
  } else if (type === "number") {
    inputElement = (
      <div className="login-formcontrol">
        <label htmlFor={id}>{label}</label>
        <input type="number" name={id} id={id} {...registerHandle} />
        {error && <p className="login__error">{error}</p>}
      </div>
    );
  } else if (type === "textarea") {
    inputElement = (
      <div className="login-formcontrol">
        <label htmlFor={id}>{label}</label>
        <textarea
          name={id}
          id={id}
          {...registerHandle}
          cols="30"
          rows="5"
        ></textarea>
        {error && <p className="login__error">{error}</p>}
      </div>
    );
  }
  return inputElement;
}
export default Input;
