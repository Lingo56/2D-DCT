import { useState } from 'react'
import PropTypes from 'prop-types'

const CodeInput = ({ onButtonClick }) => {
  const [inputValue, setInputValue] = useState('')
  const [errorText, setErrorText] = useState('')

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    // Clear error text when the input changes
    setErrorText('')
  }

  // Event handler for button click
  const handleButtonClick = () => {
    const isValidInput = /^[ab]+$/.test(inputValue)

    if (inputValue.length > 16) {
      setErrorText('String has an invalid length (16 max)')
      return
    }

    if (!isValidInput) {
      setErrorText('String contains characters other than A or B')
      return
    }

    onButtonClick(inputValue.toUpperCase())
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a sequence of As and Bs (16 max)"
          size="50"
          style={{ width: '350px', padding: '0px 6px', marginRight: '3px' }}
        />
        <button style={{ padding: '0px 6px' }} onClick={handleButtonClick}>
          Encode
        </button>
      </div>

      <div style={{ paddingTop: '5px' }}>
        {errorText && <p style={{ color: 'red', marginBottom: '10px' }}>{errorText}</p>}
      </div>
    </div>
  )
}

CodeInput.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default CodeInput
