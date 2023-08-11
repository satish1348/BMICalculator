import React, { useState } from 'react';

function Bmi() {

    const[weight,setWeight] = useState("");
    const[height,setHeight] = useState("");
    const[bmiResult,setBmiResult] = useState("");

    const setH = (e) =>{
        setHeight(e.target.value);
    }

    const setW = (e) =>{
        setWeight(e.target.value);
    }

    const CalBmi = () =>{       
        const him = height/100;
        const res = (weight / (him * him));
        setBmiResult(res.toFixed(2));
    }


  return (
    <div className='main'>
        <div className="container">
            <h1>Body Mass Index Calculator</h1>
            <form className='form' >
                <label>Enter Weight : </label><br/>
                <input id='weight' placeholder='Weight in kg' type="number" value={weight} onChange={setW}/><br/>
                <label>Enter Height : </label><br/>
                <input id='height' placeholder='Height in cms' type="number" value={height} onChange={setH}/><br/>
                <input type="button" className='resBtn' value="Calculate"  onClick={CalBmi}/><br/>
                <label>Your BMI is : (in kg/m<sup>2</sup>)</label>
                <div id="result" value={bmiResult}> {bmiResult} </div>
            </form>
        </div>
    </div>
  )
}

export default Bmi