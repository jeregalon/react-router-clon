export default function SearchPage ({ routeParams }) {
  console.log(routeParams.query)
  return (
    routeParams
     ? <h1>Buscaste {routeParams.query}</h1>
     : <h1>Buscador</h1>
  )
}