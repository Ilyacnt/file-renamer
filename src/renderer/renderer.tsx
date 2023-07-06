import { createRoot } from 'react-dom/client'
import './style.css'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

window.global ||= window

const App = () => (
    <MemoryRouter>
        <Layout />
    </MemoryRouter>
)

declare const module: { hot: any }

if (module.hot) {
    module.hot.accept()
}

const root = createRoot(document.getElementById('root') as Element)
root.render(<App />)
