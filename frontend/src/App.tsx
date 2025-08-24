import { ThemeProvider } from './components/theme-provider'
import { HomePage } from './pages/Home'
import { SpeakerDetailsPage } from './pages/Speaker-details'

function App() {
    return (
        <ThemeProvider>
            <main id="body" className="p-0 m-0 w-screen h-screen flex">
                {/* <HomePage /> */}
                <SpeakerDetailsPage />
            </main>
        </ThemeProvider>
    )
}

export default App
