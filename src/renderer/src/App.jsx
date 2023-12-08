import { useState } from 'react'
import DiscreteCosineTransform from './components/DiscreteCosineTransform'
import MatrixInput from './components/MatrixInput'

function App() {
  // State to manage the input value
  const [matrix, setMatrix] = useState(null)

  // Event handler for button click
  const handleCodeValue = (value) => {
    setMatrix(value)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      className="App"
    >
      <div style={{ textAlignLast: 'center', margin: 'auto' }}>
        <h1>Discrete Cosine Transform</h1>

        {matrix && <DiscreteCosineTransform matrix={matrix} />}

        <div style={{ paddingTop: '10px' }}>
          <MatrixInput onButtonClick={handleCodeValue} />
        </div>
      </div>
    </div>
  )
}

export default App
