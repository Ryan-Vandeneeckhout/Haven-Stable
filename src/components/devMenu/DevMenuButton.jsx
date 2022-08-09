const DevMenuButton = (props) => {


    const DevMenuOpen = () => {
        props.setDevMenuOpen(true); 
    }
    return (
        <button onClick={DevMenuOpen}>Open Dev Menu</button>
    )
}
export default DevMenuButton; 