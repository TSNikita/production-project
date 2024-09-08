import App from 'app/App'
import { ThemesProvider } from 'app/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

render(
    <BrowserRouter>
        <ThemesProvider>
            <App />
        </ThemesProvider>
    </BrowserRouter>,

    document.getElementById('root')
)