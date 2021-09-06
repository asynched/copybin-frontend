import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import Routes from './routes'

export default function App() {
  useEffect(injectStyle, [])

  return (
    <React.Fragment>
      <Routes />
      <ToastContainer pauseOnHover={false} position={'bottom-right'} />
    </React.Fragment>
  )
}
