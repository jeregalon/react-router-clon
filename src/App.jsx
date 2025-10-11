import { Router } from "./functions.jsx"
import { EVENTS, routes } from "./consts.js"


function App() {  
  return (
    <main>
      <Router routes={routes}/>
    </main>
  )
}

export default App
