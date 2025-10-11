import { EVENTS } from "./consts.js"
import { useState, useEffect } from "react"

export function navigate (href) {
  window.history.pushState({}, '', href)  // Cambia la barra de direcciones
  const navigationEvent = new Event(EVENTS.PUSHSTATE) // Crea un nuevo evento llamado pushstate
  window.dispatchEvent(navigationEvent) // Dispara el evento
}

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange) // Navegación hacia atrás

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}