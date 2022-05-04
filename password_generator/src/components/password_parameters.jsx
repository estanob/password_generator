import React from 'react';
import GenerateButton from './generate_button.jsx';

const PasswordParameters = () => {

  
  return (
    <div>
      <h1>Password Generator</h1>
      <div className="parameter-div">
        <p>Password Length:</p>
        <p>Include Symbols:</p>
        <p>Include Numbers:</p>
        <p>Include Lowercase Characters:</p>
        <p>Include Uppercase Characters:</p>
        <p>Exclude Similar Characters:</p>
        <p>Exclude Ambiguous Characters:</p>
      </div>
      <GenerateButton />
    </div>
  )
}

export default PasswordParameters;