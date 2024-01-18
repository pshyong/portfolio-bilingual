const allUrls = [
  {
    id: 'home',
    url_en: '/',
    url_zh: '/zh/',
    url_ca: '/ca/',
    url_de: '/de/',
  },
  {
    id: 'home2',
    url_en: '/#home',
    url_zh: '/zh/#inicio',
    url_ca: '/ca/#inici',
    url_de: '/de/#home',
  },
  {
    id: 'about',
    url_en: '/#about-me',
    url_zh: '/zh/#sobre-mi',
    url_ca: '/ca/#sobre-mi',
    url_de: '/de/#uber-mich',
  },
  {
    id: 'projects',
    url_en: '/#projects',
    url_zh: '/zh/#proyectos',
    url_ca: '/ca/#projectes',
    url_de: '/de/#projekte',
  },
  {
    id: 'translations',
    url_en: '/#translations',
    url_zh: '/zh/#traducciones',
    url_ca: '/ca/#traduccions',
    url_de: '/de/#ubersetzungen',
  },
  {
    id: 'contact',
    url_en: '/#contact',
    url_zh: '/zh/#contacto',
    url_ca: '/ca/#contacte',
    url_de: '/de/#kontakt',
  },
  {
    id: 'confirmation',
    url_en: '/confirmation/',
    url_zh: '/zh/confirmacion/',
    url_ca: '/ca/confirmacio/',
    url_de: '/de/bestatigung/',
  },
  {
    id: 'not-found',
    url_en: '/404/',
    url_zh: '/zh/404/',
    url_ca: '/ca/404/',
    url_de: '/de/404/',
  },
  {
    id: 'digital-pet',
    url_en: '/digital-pet/',
    url_zh: '/zh/mascota-digital/',
    url_ca: '/ca/mascota-digital/',
    url_de: '/de/digitales-haustier/',
  },
  {
    id: 'portfolio',
    url_en: '/multilingual-portfolio/',
    url_zh: '/zh/portafolio-multilenguaje/',
    url_ca: '/ca/portafolis-multillenguatge/',
    url_de: '/de/mehrsprachiges-portfolio/',
  },
  {
    id: 'paradise-hotel',
    url_en: '/paradise-hotel/',
    url_zh: '/zh/hotel-paraiso/',
    url_ca: '/ca/hotel-paradis/',
    url_de: '/de/das-paradies-hotel/',
  },
  {
    id: 'juice-store',
    url_en: '/juice-store/',
    url_zh: '/zh/tienda-de-zumos/',
    url_ca: '/ca/botiga-de-sucs/',
    url_de: '/de/das-saftgeschaft/',
  },
  {
    id: 'canvas',
    url_en: '/canvas/',
    url_zh: '/zh/canvas/',
    url_ca: '/ca/canvas/',
    url_de: '/de/canvas/',
  },
  {
    id: 'kanban',
    url_en: '/kanban/',
    url_zh: '/zh/kanban/',
    url_ca: '/ca/kanban/',
    url_de: '/de/kanban/',
  },
  {
    id: 'github-repositories',
    url_en: '/github-repositories/',
    url_zh: '/zh/repositorios-de-github/',
    url_ca: '/ca/repositoris-de-github/',
    url_de: '/de/github-repositorien/',
  },
  {
    id: 'kasaz',
    url_en: '/kasaz/',
    url_zh: '/zh/kasaz/',
    url_ca: '/ca/kasaz/',
    url_de: '/de/kasaz/',
  },
  {
    id: 'wheely',
    url_en: '/wheely/',
    url_zh: '/zh/wheely/',
    url_ca: '/ca/wheely/',
    url_de: '/de/wheely/',
  },
  {
    id: 'duck-store',
    url_en: '/duck-store/',
    url_zh: '/zh/tienda-de-patos/',
    url_ca: '/ca/botiga-d-anecs/',
    url_de: '/de/die-welt-fressen/',
  },
  {
    id: 'eat-the-world',
    url_en: '/eat-the-world/',
    url_zh: '/zh/comete-el-mundo/',
    url_ca: '/ca/menja-t-el-mon/',
    url_de: '/de/das-entengeschaft/',
  },
  {
    id: 'connect-4',
    url_en: '/connect-4/',
    url_zh: '/zh/conecta-4/',
    url_ca: '/ca/connecta-4/',
    url_de: '/de/vier-gewinnt/',
  },
  {
    id: 'spotify-express',
    url_en: '/spotify-express/',
    url_zh: '/zh/spotify-express/',
    url_ca: '/ca/spotify-express/',
    url_de: '/de/spotify-express/',
  },
  {
    id: 'the-lift',
    url_en: '/the-lift/',
    url_zh: '/zh/el-ascensor/',
    url_ca: '/ca/l-ascensor/',
    url_de: '/de/der-aufzug/',
  },
  {
    id: 'events-hunter',
    url_en: '/events-hunter/',
    url_zh: '/zh/cazador-de-eventos/',
    url_ca: '/ca/cacador-d-esdeveniments/',
    url_de: '/de/der-ereignis-jager/',
  },
  {
    id: 'task-manager',
    url_en: '/task-manager/',
    url_zh: '/zh/gestor-de-tareas/',
    url_ca: '/ca/gestor-de-tasques/',
    url_de: '/de/task-manager/',
  },
  {
    id: '2048-game',
    url_en: '/2048-game/',
    url_zh: '/zh/juego-2048/',
    url_ca: '/ca/joc-2048/',
    url_de: '/de/das-2048-spiel/',
  },
  {
    id: 'the-alphabet-game',
    url_en: '/the-alphabet-game/',
    url_zh: '/zh/pasapalabra/',
    url_ca: '/ca/passaparaula/',
    url_de: '/de/das-alphabetspiel/',
  },
  {
    id: 'data-structure',
    url_en: '/data-structure/',
    url_zh: '/zh/estructura-de-datos/',
    url_ca: '/ca/estructura-de-dades/',
    url_de: '/de/datenstruktur/',
  },
  {
    id: 'matching-game',
    url_en: '/matching-game/',
    url_zh: '/zh/juego-de-parejas/',
    url_ca: '/ca/joc-de-parelles/',
    url_de: '/de/matching-spiel/',
  },
  {
    id: 'few-seconds-math-game',
    url_en: '/few-seconds-math-game/',
    url_zh: '/zh/juego-matematico/',
    url_ca: '/ca/joc-matematic/',
    url_de: '/de/mathematik-spiele/',
  },
  {
    id: 'personal-website',
    url_en: '/personal-website/',
    url_zh: '/zh/pagina-personal/',
    url_ca: '/ca/pagina-personal/',
    url_de: '/de/personliche-webseite/',
  },
  {
    id: 'escape-from-death',
    url_en: '/escape-from-death/',
    url_zh: '/zh/escapa-de-la-muerte/',
    url_ca: '/ca/escapa-de-la-mort/',
    url_de: '/de/entkomme-vor-dem-tod/',
  },
  {
    id: 'calculator',
    url_en: '/calculator/',
    url_zh: '/zh/calculadora/',
    url_ca: '/ca/calculadora/',
    url_de: '/de/rechner/',
  },
]

export default allUrls
