import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(props) {

    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} rounded`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div class="btn-group dropstart bg-dark">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Themes
                        </button>
                        <ul class="dropdown-menu bg-dark">
                        <li><button type="button" className="btn btn-outline-light w-100" onClick={props.lightMode}> Default</button></li>
                            <li><button type="button" className="btn btn-outline-danger w-100" onClick={props.redMode}> Red</button></li>
                            <li><button type="button" className="btn btn-outline-primary w-100" onClick={props.blueMode}> Blue</button></li>
                            <li><button type="button" className="btn btn-outline-secondary w-100" onClick={props.darkMode}> Black</button></li>
                        </ul>
                    </div>

                    
                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault" >{props.modeText}</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}