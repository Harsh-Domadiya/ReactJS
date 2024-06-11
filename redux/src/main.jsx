import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { collection } from './store/data.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={collection}>
    <App />
  </Provider>
)
