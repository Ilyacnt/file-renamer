import { createRoot } from 'react-dom/client'
import './style.css'
import { MemoryRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => (
    <MemoryRouter>
        <Provider store={store}>
            <Layout />
        </Provider>
    </MemoryRouter>
)

const root = createRoot(document.getElementById('root') as Element)
root.render(<App />)
