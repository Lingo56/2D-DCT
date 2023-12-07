import { useState } from 'react'
import PropTypes from 'prop-types'

const CodeInput = ({ onButtonClick }) => {
  const [matrixSize, setMatrixSize] = useState('')
  const [matrixInput, setMatrixInput] = useState('')
  const [errorText, setErrorText] = useState('')

  // Event handler for matrix size change
  const handleMatrixSizeChange = (event) => {
    setMatrixSize(event.target.value)
    setErrorText('') // Clear error text when the input changes
  }

  // Event handler for matrix input change
  const handleMatrixInputChange = (event) => {
    setMatrixInput(event.target.value)
    setErrorText('') // Clear error text when the input changes
  }

  // Event handler for button click
  const handleButtonClick = () => {
    const parsedSize = parseInt(matrixSize, 10)

    // Check if the matrix size is a valid integer
    if (isNaN(parsedSize)) {
      setErrorText('Please enter a valid integer for matrix size.')
      return
    }

    // Check if the matrix size is between 2 and 16
    if (parsedSize < 2 || parsedSize > 16) {
      setErrorText('Matrix size must be between 2 and 16 (inclusive).')
      return
    }

    // Clear any previous error text
    setErrorText('')

    // Your logic for handling a valid input
    // For example, you can call onButtonClick with the parsed size and matrix
    onButtonClick({ size: parsedSize, matrix: matrixInput })
  }

  return (
    <div>
      <div>
        <label>
          Enter N (an integer between 2 and 16):
          <input
            type="text"
            value={matrixSize}
            onChange={handleMatrixSizeChange}
            placeholder="Enter an integer"
          />
        </label>
      </div>

      <div>
        <label>
          Enter NxN Matrix:
          <textarea
            value={matrixInput}
            onChange={handleMatrixInputChange}
            placeholder={`Enter a ${matrixSize}x${matrixSize} matrix`}
            rows={matrixSize}
            cols={matrixSize * 2}
          />
        </label>
      </div>

      <div>
        <button style={{ padding: '0px 6px' }} onClick={handleButtonClick}>
          Generate
        </button>
      </div>

      {errorText && <p style={{ color: 'red', marginBottom: '10px' }}>{errorText}</p>}
    </div>
  )
}

CodeInput.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default CodeInput
