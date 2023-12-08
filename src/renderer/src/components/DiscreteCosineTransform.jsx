import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const DiscreteCosineTransform = ({ matrix }) => {
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
  }, [matrix])

  return (
    <div>
      <hr style={{ width: '100%', paddingTop: '10px' }} />
      <div style={{ margin: '10px', verticalAlign: 'top' }}>
        <p>Code: {matrix}</p>
        <p>High Decoded Value: {highDecodedValue}</p>
        <p>Low Decoded Value: {lowDecodedValue}</p>
      </div>
    </div>
  )
}

DiscreteCosineTransform.propTypes = {
  matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired // Matrix of integers
}

export default DiscreteCosineTransform
