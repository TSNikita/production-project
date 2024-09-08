import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ThemesProvider from './themes/ThemesProvider'

render(
    <BrowserRouter>
        <ThemesProvider>
            <App />
        </ThemesProvider>
    </BrowserRouter>,

    document.getElementById('root')
)