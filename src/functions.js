import { EVENTS } from "./consts.js"

export function navigate (href) {
  window.history.pushState({}, '', href)  // Cambia la barra de direcciones
  const navigationEvent = new Event(EVENTS.PUSHSTATE) // Crea un nuevo evento llamado pushstate
  window.dispatchEvent(navigationEvent) // Dispara el evento
}