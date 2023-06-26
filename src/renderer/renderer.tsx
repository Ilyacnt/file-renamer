import { createRoot } from 'react-dom/client'
import './style.css'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

const App = () => (
    <MemoryRouter>
        <Layout />
    </MemoryRouter>
)

const root = createRoot(document.getElementById('root') as Element)
root.render(<App />)
