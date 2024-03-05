import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <div>
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto  my-3">
      <li className="nav-item active">
        <a className="nav-a" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item   mx-3 dark-bg-dark">
        <a className="nav-a" href="/about">{props.aboutText}</a>
      </li>
      
    </ul>

     <div className={`custom-control custom-switch text-${props.mode==='light'? 'dark': 'light'}`}>
  <input type="checkbox" className="custom-control-input"  onClick={props.toggleMode} id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
</div> 
   
  </div>
</nav>

    </div>
  )
}



Navbar.prototype ={
    title: PropTypes.string.isRequired,
    aboutText:  PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:  'set title here',
    aboutText: 'set about here'
}