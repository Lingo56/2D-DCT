import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ArithmeticCode = ({ codeText }) => {
  const [highDecodedValue, setHighDecodedValue] = useState(0)
  const [lowDecodedValue, setLowDecodedValue] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ac = new ArithmeticCoding()
        const { low, high } = ac.encode(codeText)

        setHighDecodedValue(high)
        setLowDecodedValue(low)
      } catch (error) {
        console.error('Error fetching code sequence:', error)
      }
    }

    fetchData()
  }, [codeText])

  return (
    <div>
      <div style={{ margin: '10px', verticalAlign: 'top' }}>
        <p>Code: {codeText}</p>
        <p>High Decoded Value: {highDecodedValue}</p>
        <p>Low Decoded Value: {lowDecodedValue}</p>
      </div>
    </div>
  )
}

// ARITHMETIC CODING
class ArithmeticCoding {
  constructor() {
    this.low = 0.0
    this.high = 1.0
    this.rangeLow = this.low
    this.rangeHigh = this.high
    this.range = this.high - this.low
  }

  encode(sequence) {
    for (const symbol of sequence) {
      if (symbol === 'A') {
        this.rangeLow = 0
        this.rangeHigh = 0.5
      } else {
        this.rangeLow = 0.5
        this.rangeHigh = 1.0
      }

      // Update the range based on probabilities
      const newHigh = this.low + this.range * this.rangeHigh
      const newLow = this.low + this.range * this.rangeLow

      this.high = newHigh
      this.low = newLow

      this.range = newHigh - newLow
    }

    // Return the updated lower and upper bounds
    return { low: this.low, high: this.high }
  }
}

ArithmeticCode.propTypes = {
  codeText: PropTypes.string.isRequired // String being decoded
}

export default ArithmeticCode
