import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [pageOk, setPageOk] = useState(false)

useEffect(() => {
  setPageOk(true)
}, [])

  return pageOk ? <Component {...pageProps} /> : null
}
