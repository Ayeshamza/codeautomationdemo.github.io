import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleClClick = () => {
        let newText = ""
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy =() =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
     
    }

    const [text, setText] = useState('')



    return (

        <>

            <div>


                <div className=" container mb-3 my-5" style={{color: props.mode==='dark'? 'white': 'black'}} >
                    <label htmlFor="myBox "><h3>{props.heading}</h3></label>

                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    
                    
                    style={{backgroundColor:props.mode==='dark'? '#133a87fa': 'white', color:props.mode==='dark'? 'white': '#071c48'}}
                    
                    id="myBox" rows="8" />
                </div>

                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClClick}>Clear text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2 ' onClick={handleUpClick}>Convert to UpperCase</button>



                <div className='container my-3' style={{color: props.mode==='dark'? 'white': 'black'}} >
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                    <h3>Preview</h3>
                    <p>{text.length>0?text:"Enter something in textbox to preview "}</p>

                </div>
            </div>


        </>
    )
}
