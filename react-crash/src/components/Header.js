

/* const Header = (props) => {
  return (
    // <div style={{color:"red",backgroundColor:"black"}}>{props.title}</div>
  <div  style={Style}>{props.title}</div>
    ) 
}*/
/* 

const Style ={
    color:"red"
} */
import Button from "./Button"
import PropTypes from "prop-types"

const Header = ({title,onAdd,showAddTask}) => {
    
  return (
    
  <header className="header">
    <h1>{title}</h1>
 <Button onClick={onAdd} color={showAddTask ?"red" :"green"} text={showAddTask ? "Close":"Add"}/>
    </header>
    )
}
Header.defaultProps={
    title:"Task Tracker"
}
Header.defaultPropTypes={
    title:PropTypes.string
}

export default Header
