import { Router } from "./Router"
import { EVENTS, routes } from "./consts.js"


function App() {  
  return (
    <main>
      <Router routes={routes}/>
    </main>
  )
}

export default App
