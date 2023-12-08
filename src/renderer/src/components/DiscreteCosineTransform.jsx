import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const DiscreteCosineTransform = ({ matrix }) => {
  const [rowFirstDctResult, setRowFirstDctResult] = useState([])
  const [colFirstDctResult, setColFirstDctResult] = useState([])

  useEffect(() => {
    const calculateRowFirstDCT = () => {
      const numRows = matrix.length
      const numCols = matrix[0].length
      const result = []

      for (let u = 0; u < numRows; u++) {
        const row = []
        for (let v = 0; v < numCols; v++) {
          let sum = 0
          for (let x = 0; x < numRows; x++) {
            for (let y = 0; y < numCols; y++) {
              sum +=
                matrix[x][y] *
                Math.cos(((2 * x + 1) * u * Math.PI) / (2 * numRows)) *
                Math.cos(((2 * y + 1) * v * Math.PI) / (2 * numCols))
            }
          }

          // Scale the result based on the DCT formula
          const alphaU = u === 0 ? 1 / Math.sqrt(numRows) : Math.sqrt(2 / numRows)
          const alphaV = v === 0 ? 1 / Math.sqrt(numCols) : Math.sqrt(2 / numCols)

          // Round the result to the nearest integer
          row.push(Math.round(alphaU * alphaV * sum))
        }
        result.push(row)
      }

      // Update the state with the rounded DCT result
      setRowFirstDctResult(result)
    }

    const calculateColFirstDCT = () => {
      const numRows = matrix.length
      const numCols = matrix[0].length
      const result = []

      for (let v = 0; v < numCols; v++) {
        const col = []
        for (let u = 0; u < numRows; u++) {
          let sum = 0
          for (let x = 0; x < numRows; x++) {
            for (let y = 0; y < numCols; y++) {
              sum +=
                matrix[x][y] *
                Math.cos(((2 * x + 1) * u * Math.PI) / (2 * numRows)) *
                Math.cos(((2 * y + 1) * v * Math.PI) / (2 * numCols))
            }
          }

          // Scale the result based on the DCT formula
          const alphaU = u === 0 ? 1 / Math.sqrt(numRows) : Math.sqrt(2 / numRows)
          const alphaV = v === 0 ? 1 / Math.sqrt(numCols) : Math.sqrt(2 / numCols)

          // Round the result to the nearest integer
          col.push(Math.round(alphaU * alphaV * sum))
        }
        result.push(col)
      }

      // Update the state with the rounded DCT result
      setColFirstDctResult(result)
    }

    calculateRowFirstDCT()
    calculateColFirstDCT()
  }, [matrix])

  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ display: 'inline-block', marginRight: '20px' }}>
        <h4 style={{ marginBottom: '5px' }}>Row First DCT</h4>
        <table border="1">
          <tbody>
            {rowFirstDctResult.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'inline-block' }}>
        <h4 style={{ marginBottom: '5px' }}>Column First DCT</h4>
        <table border="1">
          <tbody>
            {colFirstDctResult.map((col, colIndex) => (
              <tr key={colIndex}>
                {col.map((value, rowIndex) => (
                  <td key={rowIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr style={{ width: '100%', marginTop: '20px' }} />
    </div>
  )
}

DiscreteCosineTransform.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
}

export default DiscreteCosineTransform
