import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {MyRoutes} from './routes/routes'
import { Toaster } from 'react-hot-toast'

function App() {
  return(
    <>
    <MyRoutes/>
    <Toaster/>
    </>
  )
}

export default App
