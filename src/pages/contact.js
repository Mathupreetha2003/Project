import React from 'react'
import {Link} from "react-router-dom"
const Contact = () => {
  return (
    <div className="Page2">
      <h1>This is Nandu...</h1>
      <div className="Mycard"><h2>Good evening</h2></div>
      <button className="Mybutton"><Link to='/page1'>Goto Page 1</Link></button>
     
    </div>
  )
}

export default Contact
