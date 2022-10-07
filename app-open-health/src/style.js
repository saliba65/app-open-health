import OpenHealthLogo from "./assets/img/openHealthLogo.png";

export const style = {
  api: {
    apiProduction: "https://homolog.api.appnoz.com.br/",
    newApiProduction: "null",
    samlUrl: null,
    nameProfile: "sample",
    hostHeader: "null"
  },

  icons: {
    loginIcon: OpenHealthLogo,
    menuIcon: OpenHealthLogo,
    browserLogo: OpenHealthLogo
  },

  shareAttributes: {
    shareImage: OpenHealthLogo,
    shareTitle: "Noz - Plataforma de comunicação",
    shareDescription:
      "O NOZ é um aplicativo de comunicação personalizado, onde é possível criar conteúdos de acordo com a segmentação do seu público de maneira gamificada."
  },

  names: {
    nameApp: localStorage.getItem("nameApp") || "sample",
    nameScore: "Nozes",
    nameStore: "Sample Store",
    nameAcademy: localStorage.getItem("nameAcademy") || "Sample Academy",
    nameTeam: localStorage.getItem("nameTeam") || "Time",
    nameCalendar: localStorage.getItem("nameCalendar") || "Calendário",
    nameTools: localStorage.getItem("nameTools") || "Ferramentas"
  },

  colors: {
    primaryColor: localStorage.getItem("primaryColor") || "#501f99",
    secondaryColor: localStorage.getItem("secondaryColor") || "#b3247c",
    tertiaryColor: ""
  },

  variables: {
    gamificationEnabled: true,
    child_profiles: [],
    hasPrivacyPolicies: true,
    externalUse: false,
    customClient: false
  }
};
