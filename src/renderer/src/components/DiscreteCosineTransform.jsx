import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const DiscreteCosineTransform = ({ codeText }) => {
  const [highDecodedValue, setHighDecodedValue] = useState(0)
  const [lowDecodedValue, setLowDecodedValue] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setHighDecodedValue(1)
        setLowDecodedValue(2)
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

DiscreteCosineTransform.propTypes = {
  codeText: PropTypes.string.isRequired // String being decoded
}

export default DiscreteCosineTransform
