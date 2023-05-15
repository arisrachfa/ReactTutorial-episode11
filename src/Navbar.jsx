import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/formBasic'>From Basic</Link>
        <Link to='/formValidation'>Form Validation</Link>
    </>
  )
}

export default Navbar