import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const Layout = () => {
    return <h1>Hello World</h1>
}

const root = createRoot(document.getElementById('root') as Element)
root.render(<Layout />)
