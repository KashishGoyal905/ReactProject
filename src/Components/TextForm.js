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
    function clearTextClick() {
        let newText = '';
        setText(newText);
    }
    function titleTextClick() {
        let newText;
        newText = text.toLowerCase().split(' ');
        for (var i = 0; i < newText.length; i++) {
            // console.log(newText);
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        newText.join(' ');
        setText(newText.join(' '));
    }
    function copyTextClick() {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    function trimTextClick() {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
    }
    function onChange(event) {
        // console.dir(event);
        setText(event.target.value);
    }
    // its a hook state `setText` is a fuction to change text value
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-capitalize fs-3">{props.heading}</label>
                    <textarea className="form-control" id="myBox" onChange={onChange} value={text} rows="7"></textarea>
                </div>
                <button className="btn btn-primary" onClick={lowercaseButtonClick}>Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={uppercaseButtonClick}>upperCase</button>
                <button className="btn btn-primary" onClick={clearTextClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={titleTextClick}>Title</button>
                <button className="btn btn-primary" onClick={copyTextClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={trimTextClick}>Trim</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length}</b> words & <b>{text.length}</b> characters</p>
                <p><b>{text.split("\n").length}</b> Sentences</p>
                <p>It Will Took <b>{0.08 * text.split(" ").length}</b> Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
