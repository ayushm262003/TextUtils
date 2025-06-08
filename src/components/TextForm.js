import React from 'react'
import {useState} from 'react'



export default function TextForm(props) {
  

    const [text, setText] = useState('');
    //text="newtext"; WRONG WAY
    //setText("setText has updated this"); //RIGHT WAY
    
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleLoClick= () =>{
        console.log("Lowercase was clicked")
        let newText= text.toLowerCase();
        setText(newText);
    }

    const handleClearClick= () =>{
        console.log("Clear Text was clicked")
        let newText= "";
        setText(newText);
    }

    const handleOnChange= (event)=> {
        console.log("On change");
        setText(event.target.value);
    }
    
    return (
        <>
        <div>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3"></div>
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words , {text.length} characters </p>
        <p>{0.08*text.split(' ').length} Minutes Read</p>
        <h2>Preview  </h2>
        <p>{text}</p>
        </div>
        </>
  )
}
