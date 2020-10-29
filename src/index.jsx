import React from 'react'
import { render } from 'react-dom'

const App = () => <div>hmmmm</div>
const app = <App />

const here = document.querySelector('#here')
console.log(here)

render(app, here)
