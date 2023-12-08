import { useState } from 'react'
import PropTypes from 'prop-types'

const MatrixInput = ({ onButtonClick }) => {
  const [matrixSize, setMatrixSize] = useState(2)
  const [matrixInput, setMatrixInput] = useState('')
  const [errorText, setErrorText] = useState('')

  // Event handler for matrix size change
  const handleMatrixSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10)

    // Check if the matrix size is between 2 and 16
    if (newSize > 16) {
      setErrorText('Matrix size must be between 2 and 16 (inclusive).')
      return
    }

    setMatrixSize(newSize)
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

    // Check if the matrix size is between 2 and 16
    if (parsedSize < 2 || parsedSize > 16) {
      setErrorText('Matrix size must be between 2 and 16 (inclusive).')
      return
    }

    // Check if the matrix size is a valid integer
    if (isNaN(parsedSize)) {
      setErrorText('Please enter a valid integer for matrix size.')
      return
    }

    // Clear any previous error text
    setErrorText('')

    // Split the input into rows
    const rows = matrixInput.split('\n')

    // Process each row and convert numbers to integers
    const matrix = rows.map((row) =>
      row.split(/\s+/).map((value) => {
        const intValue = parseInt(value.trim(), 10)

        // Check if the value is a valid integer
        if (isNaN(intValue)) {
          setErrorText('Please enter a valid integer for each matrix element.')
          throw new Error('Invalid integer in matrix.')
        }

        return intValue
      })
    )

    // Check if the matrix is NxN
    if (matrix.length !== parsedSize || matrix.some((row) => row.length !== parsedSize)) {
      setErrorText(`Matrix must be ${parsedSize}x${parsedSize}.`)
      return
    }

    console.log(matrix)

    onButtonClick(matrix)
  }

  return (
    <div>
      <div>
        <label>
          Select N:
          <div style={{ alignItems: 'center', margin: '10px' }}>
            <input
              type="range"
              value={matrixSize}
              onChange={handleMatrixSizeChange}
              min="2"
              max="16"
              step="1"
              style={{ marginRight: '6px', verticalAlign: '-19%' }}
            />
            <span>{matrixSize}</span>
          </div>
        </label>
      </div>

      <div style={{ margin: '10px' }}>
        <label>
          Enter NxN Matrix (separate each number by space):
          <div style={{ margin: '10px' }}>
            <textarea
              value={matrixInput}
              onChange={handleMatrixInputChange}
              placeholder={`Enter ${matrixSize}x${matrixSize} matrix`}
              rows={matrixSize}
              cols={matrixSize * 2 + 24}
            />
          </div>
        </label>
      </div>

      <div>
        <button style={{ padding: '0px 6px' }} onClick={handleButtonClick}>
          Generate
        </button>
      </div>

      {errorText && <p style={{ color: 'red', marginTop: '10px' }}>{errorText}</p>}
    </div>
  )
}

MatrixInput.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default MatrixInput
