const OnBoardingSectionWrapper = (props) => {
  const { children } = props;

  return <div className={`onBoardingSectionWrapper ${props.wrapperFix}`}>{children}</div>;
};
export default OnBoardingSectionWrapper;