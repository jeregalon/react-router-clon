import { PAGES, useI18n } from "../consts";

export default function SearchPage ({ routeParams }) {
  const lang = routeParams.lang ?? 'es'
  const i18n = useI18n(PAGES.SEARCH_PAGE, lang)
  console.log(routeParams.query)
  return (
    routeParams.query
     ? <h1>{i18n.withQuery} {routeParams.query}</h1>
     : <h1>{i18n.withoutQuery}</h1>
  )
}