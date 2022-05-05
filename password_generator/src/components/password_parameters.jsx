import React from 'react';
import GenerateButton from './generate_button.jsx';

const PasswordParameters = () => {


  return (
    <div className="parameters">
      <h1>Password Generator</h1>
      <div className="parameter-div">
        <p>Password Length:</p>
        <div>
          <p>Include Symbols:</p>
          <label>
            <input
              type="checkbox"
              name="symbols" />
          </label>
        </div>
        <div>
          <p>Include Numbers:</p>
          <label>
            <input
              type="checkbox"
              name="numbers" />
          </label>
        </div>
        <div>
          <p>Include Lowercase Characters:</p>
          <label>
            <input
              type="checkbox"
              name="lowercase" />
          </label>
        </div>
        <div>
          <p>Include Uppercase Characters:</p>
          <label>
            <input
              type="checkbox"
              name="uppercase" />
          </label>
        </div>
        <div>
          <p>Exclude Similar Characters:</p>
          <label>
            <input
              type="checkbox"
              name="similar" />
          </label>
        </div>
        <div>
          <p>Exclude Ambiguous Characters:</p>
          <label>
            <input
              type="checkbox"
              name="ambiguous" />
          </label>
        </div>
      </div>
      <GenerateButton />
    </div>
  )
}

export default PasswordParameters;