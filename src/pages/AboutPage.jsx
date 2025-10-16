import { PAGES, useI18n } from "../utils/consts";
import Link from "../components/Link";

export default function AboutPage ({ routeParams }) {
  const lang = routeParams.lang ?? 'es'
  const i18n = useI18n(PAGES.ABOUT_PAGE, lang)
  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to={`/${lang}`}>{i18n.link}</Link>
    </>
  )
}