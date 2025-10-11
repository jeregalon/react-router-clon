import { navigate } from "./functions"

export default function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    
    const isMainEvent = event.button === 0  // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()  // Previene el comportamiento del anchor por defecto
      navigate(to)
    }

  }

  return (
    <a
      onClick={handleClick}
      href={to}
      target={target}
      {...props}
    />
  )
}