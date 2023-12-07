import { useState } from 'react'
import DiscreteCosineTransform from './components/DiscreteCosineTransform'
import CodeInput from './components/CodeInput'

function App() {
  // State to manage the input value
  const [codeValue, setCodeValue] = useState(null)

  // Event handler for button click
  const handleCodeValue = (value) => {
    setCodeValue(value)
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
      <div style={{ textAlignLast: 'center', margin: 'auto', height: '150px' }}>
        <h1>Discrete Cosine Transform</h1>

        {codeValue && <DiscreteCosineTransform codeText={codeValue} />}

        <div style={{ paddingTop: '10px' }}>
          <CodeInput onButtonClick={handleCodeValue} />
        </div>
      </div>
    </div>
  )
}

export default App
