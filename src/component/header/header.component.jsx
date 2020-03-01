import React from 'react'
import { Link } from 'react-router-dom';


import './header.styles.scss'

const Header = () => (
  <header>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/posts'>Articles</Link>
      <Link to='/tests'>Test</Link>
    </nav>
  </header>
)

export default Header;