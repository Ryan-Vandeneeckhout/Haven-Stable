const MyProfileItemWrapper = (props) => {
  const { children } = props;

  return (
    <div className="myProfileItemContainer">
      <h2>{props.title}</h2>
      {children}
    </div>
  );
};
export default MyProfileItemWrapper;
