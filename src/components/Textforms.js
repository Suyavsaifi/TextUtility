import React, { useState } from 'react'


export default function Textforms(props){
    let [text, setText] = useState("Enter Text Here")
    let [flag, setFlag] = useState(false)
    let [new_text, setNewText] = useState('')
    let handleOnClick = ()=>{
        setText(text.toUpperCase())
    }

    let getSummary = ()=>{
        setNewText(text)
        setFlag(true)
        props.showAlert("Text analysis is completed", "Success")
        
    }

    // let totalWords=(text)=>{
    //     total_words = text.split(" ")
    // }

    let handleOnChange = (evt)=>{
        console.log(evt)
        setFlag(false)
        setText(evt.target.value)
    }

    let removeSpace=()=>{
        setFlag(false)
        let new_formatted_text = text.split(" ").filter(e=>String(e).trim())
        new_formatted_text = new_formatted_text.join(" ")
        setText(new_formatted_text)
    }

    let copyTexthandler=()=>{
        let copyText = document.getElementById("textbox")
        copyText.select()
        console.log("Copied Text:", copyText.value)
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Text has been copied","Success")
    }

    {/*
    I have converted the above arrow function and used the same on the event.
    */}
    return (
        <>
            <div className="mb-3">
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h2>
            {/* <label htmlFor="textbox" className="form-label">Example textarea</label> */}
            <textarea style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} className="form-control" id="textbox" rows="8"></textarea>
            <button className='btn btn-primary my-3' onClick={handleOnClick}>Covert to UPPER CASE</button>
            <button className='btn btn-primary my-3 mx-2' onClick={getSummary}>Get Summary</button>
            <button className='btn btn-primary my-3 mx-2' onClick={copyTexthandler}>Copy Text</button>
            <button className='btn btn-primary my-3 mx-2' onClick={removeSpace}>Remove Extra Space</button>
            </div>
            {
                flag
                ?
                <span>
                    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
                    <h1>Text Summary</h1>
                    <p className='my-1'>No of Character : {text.length}</p>
                    <p className='my-1'>No of words : {text.split(" ").filter(e=>String(e).trim()).length}</p>
                    <p className='my-1'>Avg time required to read the text : {Math.round(0.008*text.split(" ").length*60)} sec</p>
                    <h2> Text Preview </h2>
                    <p>{new_text.length>0?new_text:"No text to preview"}</p>
                    </div>

                </span>
                :
                ""
            }
        </>
    )
}