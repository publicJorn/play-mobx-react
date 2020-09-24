import React from 'react'

import All from './All'
import Filtered from './Filtered'
import './styles.css'

const App = ({ store }) => {
  return (
    <div className="App">
      <h1>Requests</h1>
      <All store={store} />
      <Filtered store={store} />
    </div>
  )
}

export default App
