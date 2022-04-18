import React, { useState } from 'react'

export default function Body() {

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [result, setResult] = useState('')

  return (
    <div>
        <form>
            <input type='text' value={number1} onChange={(e) => {setNumber1(e.target.value)}}/>
            <input type='text' value={number2} onChange={(e) => {setNumber2(e.target.value)}}/>
        </form>
        <div>
            <button onClick={() => {setResult(parseInt(number1) + parseInt(number2))}}>+</button>
            <button onClick={() => {setResult(number1 - number2)}}>-</button>
            <button onClick={() => {setResult(number1 * number2)}}>*</button>
            <button onClick={() => {setResult(number1 / number2)}}>/</button>
        </div>
        <h3>
            {result}
        </h3>
    </div>
  )
}
