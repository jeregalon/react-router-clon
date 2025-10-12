import { lazy, Suspense } from "react"
import { Router } from "./Router"
import { EVENTS } from "./consts.js"
import { HomePage } from "./pages/HomePage.jsx"
import Page404 from "./Page404.jsx"
import Route from "./Route.jsx"
import SearchPage from "./SearchPage.jsx"

const LazyAboutPage = lazy(() => import('./pages/AboutPage.jsx')) // importado dinámico

function App() {  
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={LazyAboutPage} />
          <Route path='/search/:query' Component={SearchPage} />
        </Router> 
      </Suspense>
    </main>
  )
}

export default App
