
import React from 'react'
import { render } from 'react-dom'
import App from './js/components/App'
import './style/main.scss'

render(<App />, document.getElementById('app'))

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./js/components/App', () => render(App))
