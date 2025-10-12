import { EVENTS } from "./consts.js"
import { useState, useEffect, Children } from "react"
import { match } from "path-to-regexp"

export function Router({ children, defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
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

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null  
  })

  const Page = routesFromChildren.find(({ path }) => {
    if (path === currentPath) return true
    
    // rutas dinámicas como /search/:query
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    console.log(matched)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page 
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent />
}