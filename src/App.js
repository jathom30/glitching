import React from 'react'
import Slices from './Slices'

const App = ()  => {
  const [show, setShow] = React.useState(false)

  return (
    <div>
      {show && <Slices height={300} />}
      <button onClick={() => setShow(!show)}>{show ? 'stop' : 'start'}</button>
    </div>
  );
}

export default App
