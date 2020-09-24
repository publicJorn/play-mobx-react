import React from 'react'
import ReactDOM from 'react-dom'

import Store from './store'
import App from './App'

const rootElement = document.getElementById('root')
const store = new Store()

// Test
window.store = store
console.log('`store` is set on window, so you can play with it')

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  rootElement,
)
