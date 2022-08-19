const CheckboxInput = (props) => {
  return (
    <div className="acceptCondtions">
      <input
        type="checkbox"
        className="checkbox"
        name="conditions"
        value={props.valueText}
        onChange={props.handleSubmitChange}
      />
          <label htmlFor="conditions">{props.valueText}</label>
    </div>
  );
};
export default CheckboxInput; 