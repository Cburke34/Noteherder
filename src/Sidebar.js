import React from 'react'

import './Sidebar.css'
import SignOut from './SignOut'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'

const Sidebar = ({ resetCurrentNote, signOut }) => {
  return (
    <nav className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <a
        className="new-note"
        onClick={resetCurrentNote}
      >
        <img
          src={newHover}
          alt="New note"
        />
        <img
          className="outline"
          src={newIcon}
          alt="New note"
        />
      </a>
      <SignOut 
      signOut={ signOut }
      />
    </nav>
  )
}

export default Sidebar