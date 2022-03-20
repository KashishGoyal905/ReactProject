import React from 'react'
// importing proptypes(impt)
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">{props.about}</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success text-dark border-dark" type="submit">Dark Mode</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

// validting props
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

// default props if we send nothing in app.js navbar
Navbar.defaultProps = {
    title: 'Set Title Here',
    about: 'About taxt Here'
}