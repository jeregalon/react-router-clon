import Link from "../Link";

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>React Router desde cero</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
    </>
  )
}