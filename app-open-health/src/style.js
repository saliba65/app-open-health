export const style = {
  api: {
    apiProduction: "https://homolog.api.appnoz.com.br/",
    newApiProduction: "null",
    samlUrl: null,
    nameProfile: "sample",
    hostHeader: "null"
  },

  icons: {
    loginIcon: "https://timcoo-geral.s3.amazonaws.com/Logos/noz.png",
    menuIcon:
      localStorage.getItem("menuIcon") ||
      "https://timcoo-geral.s3.amazonaws.com/Logos/secondary_logo_noz.png",
    browserLogo: "https://timcoo-geral.s3.amazonaws.com/Logos/noz.png"
  },

  shareAttributes: {
    shareImage: "https://timcoo-geral.s3.amazonaws.com/Logos/noz.png",
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
    primaryColor: localStorage.getItem("primaryColor") || "#007bff",
    secondaryColor: localStorage.getItem("secondaryColor") || "#2e63fb",
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
