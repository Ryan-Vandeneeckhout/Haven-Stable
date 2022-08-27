export default function EmailAndPasswordInput(props) {
  const handleUserInput = (e) => {
    props.setValue(`${e.target.value}`);
  };

  const handleFocus = (e) => {
    e.target.select();
    let input = document.getElementsByClassName("inputSelectedByUser");
    for (let i = 0; i < input.length; i++)
      input[i].classList.remove("inputSelectedByUser");
    props.InputRef.current.classList.add("inputSelectedByUser");
  };
  return (
    <div className="labelsEmail">
      <label htmlFor={`${props.valueText}`}>{props.valueText}:</label>

      {props.requiredInput ? (
        <input
          required
          aria-label={`${props.valueText} input`}
          type={`${props.valueType}`}
          onChange={handleUserInput}
          placeholder={props.valueInput}
          value={props.value}
          onFocus={handleFocus}
          ref={props.InputRef}
          min={props.min}
          max={props.max}
        />
      ) : (
        <input
          aria-label={`${props.valueText} input`}
          type={`${props.valueType}`}
          onChange={handleUserInput}
          placeholder={props.valueInput}
          value={props.value}
          onFocus={handleFocus}
          ref={props.InputRef}
          min={props.min}
          max={props.max}
        />
      )}
    </div>
  );
}
