import React, { useState } from 'react'
// importing proptypes(impt)
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black'
    })

    const [btnText, setBtnText] = useState("Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                borderColor: 'white'
            })
            setBtnText("Light Mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                borderColor: 'black'
            })
            setBtnText("Dark Mode")

        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={myStyle}>
                <div className="container-fluid" style={myStyle}>
                    <a className="navbar-brand" href="/" style={myStyle}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" style={myStyle}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/" style={myStyle}>{props.about}</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-outline-success" style={myStyle} onClick={toggleStyle}>{btnText}</button>
                        </div>
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