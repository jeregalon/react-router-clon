import { Router } from "./Router"
import { EVENTS } from "./consts.js"
import { AboutPage } from "./pages/AboutPage.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import Page404 from "./Page404.jsx"
import Route from "./Route.jsx"
import SearchPage from "./SearchPage.jsx"
function App() {  
  return (
    <main>
      <Router defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/search/:query' Component={SearchPage} />
      </Router> 
    </main>
  )
}

export default App
