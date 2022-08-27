const OnBoardingSectionContainer = (props) => {
    const { children } = props;
  
    return <section className={`onBoardingSectionContainer ${props.backgroundClass}`}>{children}</section>;
  };
  export default OnBoardingSectionContainer;