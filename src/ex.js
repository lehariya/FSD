import React, { useRef } from "react";

function Ex(){
    const firstRef = useRef(null); //reference
    const formSubmitted = (event)=> {
        event.preventDefault(); //prevent default
       // console.log("Form submitted");
        console.log(firstRef.current.value);
        firstRef.current.value=""; //clear value
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
            <input type="text" ref={firstRef}/>
            <button type ="Submit">Submit</button>
            </form>
        </div>
    );
}
export default Ex;