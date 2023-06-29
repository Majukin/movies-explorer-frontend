function Input({
  labelName,                         
  labelFor,
  inputName,
  idInput,
  typeInput,
  value,
  maxLength,
  minLength,
  pattern,
  autoComplete,
  onChange,
  spanText,
}) {
  return (
    <>
      <label htmlFor={labelFor} className="auth__label">
        {labelName}
      </label>

      <input
        className="auth__input"
        name={inputName}
        type={typeInput}
        id={idInput}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required
        autoComplete={autoComplete}
        onChange={onChange}
      />

      <span className="error">{spanText}</span>
    </>
  );
}

export default Input;
