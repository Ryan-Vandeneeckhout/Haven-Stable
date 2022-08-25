const MyProfileContentWrapper = (props) => {
    const { children } = props;
  
    return (
      <div className="myProfileWrapper">
        <h2>{props.title}</h2>
        {children}
      </div>
    );
  };
  export default MyProfileContentWrapper;
  