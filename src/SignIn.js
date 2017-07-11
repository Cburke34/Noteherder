import React from 'react'


import Header from './Header'
import './SignIn.css'
import googleLogo from './google.svg'
import { auth, googleProvider, gitProvider } from './base'

const SignIn = () => {
  
  const authenticateGit = () => {
    auth.signInWithPopup(gitProvider)

  }

  const authenticateGoogle = () => {
    auth.signInWithPopup(googleProvider)
    
  }

  return (
    <div className="SignIn">
        <Header />
      <main>
        <h3>Hey, Nerd! You Like Notes?</h3>
        <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>

        <button
          className="google"
          onClick= {authenticateGoogle}
        >
        <img src={googleLogo} alt="" />
          Sign in with Google
        </button>

        <button 
          className="github"
          onClick= {authenticateGit}
        >
        <i className="fa fa-github"></i>
          Sign in with GitHub
        </button>


      </main>
    </div>
  )
}
export default SignIn