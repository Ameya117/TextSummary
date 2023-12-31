import React,{useState} from 'react'

export default function Textfrom(props) {
  const [text, setText] = useState("");
  const handleOnChange= (event)=>{
    setText(event.target.value);
  }

  const handleOnClickCopy = ()=>{
      var copyText = document.getElementById("myBox");    
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices      
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text copied","success");
  }
  const handleOnClickUpper= ()=>{
    let newText = text.toUpperCase();
    props.showAlert("Converted to Uppercase","success");
    setText(newText);
  }

  const handleOnClickLower= ()=>{
    let newText = text.toLocaleLowerCase();
    props.showAlert("Converted to Lowercase","success");
    setText(newText);
  }

  const handleOnClickClear = ()=>{
    setText('');
  }
   const handleOnClickFrequency = (event)=>{
    const word = event.target.value;
    let textArray = text.split(" ");
    let len =0;
    textArray.forEach((temp)=>{
           if(word===temp){
            len++;
           }
         })
         document.getElementById("word-frequency").innerHTML = "Frequency of '"+ word+ "' : " + len;
   }

  return (
    <div>
      <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="myBox"  value={text} onChange={handleOnChange}  rows="7"></textarea> 
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClickUpper}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickLower}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickCopy}>Copy</button>

        <input className="rounded" type="text" name="frequency" onChange={handleOnClickFrequency} placeholder="Find frequency"></input>
        <div className="container my-4">
            <h1>Text summary:</h1>
            <p>Words : {text.split(" ").length-1} , Characters : {text.length}</p>
            <p>Reading time : {(text.split(" ").length-1)*0.008} minutes.</p>
            <p id="word-frequency">  </p>

            <h2>Preview: </h2>
            <p>{text.length===0?"Enter text to preview":text}</p>
        </div>
    </div> 
  )
}
