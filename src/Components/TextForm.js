import React, { useState } from 'react'
// importing hook from react☝️


export default function TextForm(props) {
    function lowercaseButtonClick() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    function uppercaseButtonClick() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function onChange(event) {
        // console.dir(event);
        setText(event.target.value);
    }
    // its a hook state `setText` is a fuction to change text value
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-capitalize fs-3">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={onChange} value={text} rows="7"></textarea>
            </div>
            <button className="btn btn-primary" onClick={lowercaseButtonClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={uppercaseButtonClick}>Convert to upperCase</button>
        </div>
    )
}
