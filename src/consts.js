export const EVENTS = { // esto es un enum
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export const PAGES = {
  ABOUT_PAGE: 'AboutPage',
  HOME_PAGE: 'HomePage',
  SEARCH_PAGE: 'SearchPage'
}

export const I18N = {
  'AboutPage': {
    es: {
      title: 'Sobre nosotros',
      description: '¡Hola! Me llamo José Enrique, y estoy creando un clon de React Router por un tutorial de midudev.',
      link: 'Ir a la página principal'
    },
    en: {
      title: 'About us',
      description: "Hi! My name is José Enrique, and I'm creating a React Router clone based on a midudev tutorial.",
      link: 'Go to Home Page'
    }
  },
  'HomePage': {
    es: {
      title: 'Página principal',
      description: 'Esto es un clon de React Router',
      link: 'Ir a Sobre nosotros'
    },
    en: {
      title: 'Home page',
      description: "This is a React Router clon",
      link: 'Go to About us'
    }
  },
  'SearchPage': {
    es: {
      withQuery: 'Buscaste',
      withoutQuery: 'Buscador'
    },
    en: {
      withQuery: 'You searched',
      withoutQuery: 'Searcher'
    }
  }
}

export const useI18n = (page, lang) => {
  return I18N[page][lang] || I18N[page].en
}