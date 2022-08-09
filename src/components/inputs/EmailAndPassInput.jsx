export default function EmailAndPasswordInput(props) {

  const handleUserInput = (e) => {
    props.setValue(`${e.target.value}`); 
  }

  const handleFocus = (e) => {
    e.target.select()
  }
  return (
    <div className="labelsEmail">
      <label htmlFor={`${props.valueText}`}>{props.valueText}:</label>
      <input
        required
        aria-label={`${props.valueText} input`}
        type={`${props.valueType}`}
        onChange={handleUserInput}
        placeholder={props.valueInput}
        value={props.value}
        onFocus={handleFocus}
        ref={props.InputRef}
      />
    </div>
  );
}
