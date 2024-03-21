import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/exercise">Exercises</Link></li>
        <li><Link to="/nutrionalchart">Nutrional chart</Link></li>
        <li><Link to="/fitnesschart">Fitness Chart</Link></li>
        <li><Link to="/bmi">BMi & Notes</Link></li>
      </ul>
    </nav>
  )
}

export default Nav