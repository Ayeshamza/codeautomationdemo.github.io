import React from 'react'

function About(props) {
  return (
    
   
    <div>
          <div className="card text-center my-5"   style={{backgroundColor:props.mode==='dark'? '#133a87fa': 'white', color:props.mode==='dark'? 'white': 'black'}} >
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link active" href="/">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>

    
  )
}

export default About
