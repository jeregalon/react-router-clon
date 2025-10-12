import Buscador from "./Buscador"
import { AboutPage } from "./pages/AboutPage"
import { HomePage } from "./pages/HomePage"

export const EVENTS = { // esto es un enum
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: Buscador
  }
]