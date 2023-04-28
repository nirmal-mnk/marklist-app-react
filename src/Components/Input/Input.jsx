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
  }
  return inputElement;
}
export default Input;
