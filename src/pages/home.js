import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      Home
      <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'white'}} to="/contact">Contact</Link></button>
      <button><Link to="/contact">Services</Link></button>
      
      
    </div>
  )
}

export default Home
