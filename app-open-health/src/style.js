import OpenHealthLogo from "./assets/img/openHealthLogo.png";

export const style = {
  api: {
    apiProduction: "https://homolog.api.appnoz.com.br/",
    newApiProduction: "null",
    samlUrl: null,
    nameProfile: "openHealth",
    hostHeader: "null"
  },

  icons: {
    loginIcon: OpenHealthLogo,
    menuIcon: OpenHealthLogo,
    browserLogo: OpenHealthLogo
  },

  shareAttributes: {
    shareImage: OpenHealthLogo,
    shareTitle: "Open Health App",
    shareDescription: "Open Health App description"
  },

  names: {
    nameApp: localStorage.getItem("nameApp") || "openHealth",
    nameScore: "Coins",
    nameStore: "openHealth Store",
    nameAcademy: localStorage.getItem("nameAcademy") || "openHealth Academy",
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
