import { lazy, Suspense } from "react"
import { Router } from "./components/Router.jsx"
import { EVENTS } from "./utils/consts.js"
import Page404 from "./components/Page404.jsx"
import Route from "./components/Route.jsx"

const LazyAboutPage = lazy(() => import('./pages/AboutPage.jsx')) // importación dinámica
const LazyHomePage = lazy(() => import('./pages/HomePage.jsx'))
const LazySearchPage = lazy(() => import('./pages/SearchPage.jsx'))

function App() {  
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router defaultComponent={Page404}>
          <Route path='/:lang' Component={LazyHomePage} />
          <Route path='/:lang/about' Component={LazyAboutPage} />
          <Route path='/:lang/search/{:query}' Component={LazySearchPage} />
        </Router> 
      </Suspense>
    </main>
  )
}

export default App
