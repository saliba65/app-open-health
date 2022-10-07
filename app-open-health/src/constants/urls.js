const urls = {
  ROUTES_MENU: {
    MURAL: {
      id: 0,
      patch: "/",
      nameIcon: "MuralIcons",
      showMenu: true,
      name: "mural"
    },
    FAVORITE: {
      id: 1,
      patch: "/favoritos",
      nameIcon: "FavoriteIcons",
      showMenu: true,
      name: "favorite"
    },
    GROUP_PARDINI: {
      id: 2,
      patch: "/grupo-pardini",
      nameIcon: "GroupPardini",
      showMenu: true,
      name: "groupPardini"
    },
    ABOUT_US: {
      id: 3,
      patch: "/sobre-nos",
      nameIcon: "AboutUs",
      showMenu: true,
      name: "aboutUs"
    },
    APPS: {
      id: 4,
      patch: "/ferramentas",
      nameIcon: "AppsIcons",
      showMenu: true,
      name: "apps"
    },
    CALENDAR: {
      id: 5,
      patch: "/calendario",
      nameIcon: "EventsIcons",
      showMenu: true,
      name: "calendar"
    },
    SCORE_HISTORY: {
      id: 6,
      patch: "/historico-de-pontuacao",
      nameIcon: "NozIcon",
      showMenu: localStorage.getItem("roles") !== "guest",
      name: "scoreHistory"
    },
    BIRTHDAYS: {
      id: 7,
      patch: "/aniversarios",
      nameIcon: "BirthdaysIcons",
      showMenu: true,
      name: "birthdays"
    },
    ACADEMY: {
      id: 8,
      patch: "/academy",
      nameIcon: "AcademyIcons",
      showMenu: true,
      name: "academy"
    },
    STORE: {
      id: 9,
      patch: "/loja",
      nameIcon: "StoreIcons",
      showMenu: localStorage.getItem("roles") !== "guest",
      name: "store"
    },
    TIME: {
      id: 10,
      patch: "/time",
      nameIcon: "SquadIcons",
      showMenu: true,
      name: "squad"
    },
    FILES: {
      id: 11,
      patch: "/arquivos/pastas",
      nameIcon: "ArquivesIcons",
      showMenu: true,
      name: "arquives"
    },
    HOLERITE: {
      id: 12,
      patch: "/holerite-cibra",
      nameIcon: "HoleriteIcon",
      showMenu: true,
      name: "holerite"
    },
    CONFIGURATIONS: {
      id: 13,
      patch: "/configuracoes",
      nameIcon: "ConfigurationsIcons",
      showMenu: true,
      name: "settings"
    }
  },
  ROUTES: {
    LOGIN: "/login",
    MURAL: "/",
    FAVORITE: "/favoritos",
    MY_NOTIFICATIONS: "/minhas-notificacoes",
    DETAILS_PRODUCT: "/produto",
    LOGOUT: "/logout",
    FILES: "/arquivos",
    STORE: "/loja",
    TEAM: "/time",
    BIRTHDAYS: "/aniversarios",
    BIRTHDAYS_TODAY: "/aniversariantes",
    CALENDAR: "/calendario",
    PROFILE: "/perfil",
    EDIT_PROFILE: "/editar-perfil",
    ACADEMY: "/academy",
    SCORE_HISTORY: "/historico-de-pontuacao",
    FORGET_PASSWORD: "/esqueci-a-senha",
    DETAILS_PUBLICATION: "/detalhes-publicacao",
    CONFIGURATIONS: "/configuracoes",
    APPS: "/ferramentas",
    SIGNUP: "/cadastroSuvinil",
    DETAILS_GALLERY: "/galeria",
    GROUP_PARDINI: "/grupo-pardini",
    SUB_MENU_PARDINI: "/grupo-pardini",
    OUR_COMPANIES_PARDINI: "/sub-menu",
    OUR_COMPANIES_PUBLICATION: "/detalhes",
    ABOUT_US: "/sobre-nos",
    SUB_ABOUT_US: "/sobre-nos",
    HOLERITE: "/holerite",
    CIBRA_TEAMS: "/teams-auth"
  }
};

export default urls;
