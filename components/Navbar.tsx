import React from 'react'
import { ModeToggle } from './DarkModeButton'

const Navbar = () => {
  return (
    <div>
        <div className="logo"><span>J</span>Blog</div>

        <ModeToggle/>

    </div>
  )
}

export default Navbar