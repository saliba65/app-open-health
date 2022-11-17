/* eslint-disable import/no-anonymous-default-export */
import { style } from "../style";

const storeRedeemMessage = () => {
  switch (style.names.nameApp) {
    case "Pintou Parceria Suvinil":
      return "Compra realizada com sucesso! Aguarde e fique de olho em seu WhatsApp que enviaremos o seu voucher em até 10 dias.";
    case "PetroRio":
      return "Pronto, agora é só aguardar! O time de RH enviará os itens para você em breve!";
    case "MRN":
      return "Tudo certo! Entre em contato com Comunicação para resgatar seu produto.";
    case "youseed":
      return "Tudo certo! Entre em contato com o CI para resgatar seu produto.";
    default:
      return "Tudo certo! Entre em contato com o RH para resgatar seu produto.";
  }
};

export default {
  "pt-BR": {
    menu: {
      mural: "Dashboard Exames",
      groupPardini: "Grupo Pardini",
      aboutUs: "Sobre Nós",
      favorite: "Favoritos",
      calendar: style.names.nameCalendar,
      birthdays: "Aniversários",
      academy: style.names.nameAcademy,
      store: style.names.nameStore,
      squad: style.names.nameTeam,
      arquives: "Exames",
      settings: "Configurações",
      apps: style.names.nameTools,
      gallery: "Galeria",
      scoreHistory: `Histórico de ${style.names.nameScore}`,
      myNotifications: "Minhas Notificações",
      holerite: "Holerite",
    },

    groupPardiniSubmenu: {
      bio: "Sobre Nós",
    },

    academy: {
      textPage: {
        notCursesFound:
          "Aqui você irá conferir curiosidades e informações interativas para ampliar o seu conhecimento. Estamos construindo essa seção e, em breve, teremos novidades!",
      },
      sidebar: {
        title:
          style.variables.child_profiles?.length > 0
            ? "Realizados"
            : "Meus Cursos",
      },
      couseDetail: {
        modules: "Módulos",
        resetCourse: "Reiniciar Curso",
        finalizedModule: "Módulo Finalizado!",
        finalizedCourse: "Curso Finalizado!",
      },
    },

    arquives: {
      textPage: {
        download: "Baixar",
        notFilesFound: "Ainda não existem pastas ou arquivos.",
        notGalleryFound: "Ainda não existem fotos ou videos.",
        notFilesFoundAtSearch: "Nenhum arquivo foi encontrado em sua busca",
        toView: "Visualizar",
      },
    },

    birthdays: {
      textPage: {
        clickHere: "Clique Aqui",
        know: "Conheça",
        todayWeHave: "Hoje temos",
        birthday: "aniversariante",
        birthdayPlural: "aniversariantes",
      },
    },

    calendar: {
      textPage: {
        events: "Eventos",
        event: "Evento",
        holidays: "Feriados",
        holiday: "Feriado",
        nextEvent: "Próximos Eventos",
        subtitle: "Legenda",
        birthdaysOfTheDay: "Aniversários do dia",
        noEventsForThatDay: "Nenhum evento para esse dia",
        notNextEvents: "Não há eventos programados",
        noBirthdayForThatDay: "Não há aniversariantes hoje",
      },
    },

    general: {
      email: "E-MAIL",
      password: "SENHA",
      user: "USUÁRIO",
      buttons: {
        add: "Adicionar",
        back: "Voltar",
        buy: "Comprar",
        cancel: "Cancelar",
        confirm: "Confirmar",
        edit: "Editar",
        editProfile: "Editar Perfil",
        myProfile: "Meu Perfil",
        enter: "Entrar",
        exit: "Sair",
        doYouWantToLeave: "Deseja sair?",
        ok: "OK",
        save: "SALVAR",
        send: "Enviar",
        update: "Atualizar",
        viewAll: "Ver Todos",
        goListNotifications: "Ir para listagem das notificações",
        access: "Acessar",
        inputRequired: "Campo obrigatório",
        inputEmailInvalid: "E-mail inválido",
        inputPhoneInvalid: "Telefone inválido. Ex: (xx) x xxxx-xxxx",
        loginInvalid:
          "O nome de usuário só pode conter letras, números, sublinhados (_), hífens (-) e pontos. Espaços e caracteres especiais não são aceitos.",
        remove: "Remover",
        continue: "Continuar",
        finish: "Finalizar",
        change: "Alterar",
        backToTop: "Voltar ao topo",
      },
      textPage: {
        optionsOfUser: "Opções do usuário",
        returnToHome: "Voltar para tela inicial",
        goTo: "Ir para",
        view: "Ver",
        viewHistoryOfMyCoins: "Ver histórico das minhas moedas",
        acessToFolder: "Acessar a pasta",
        clickToGoToContant: "Clique para ir ao conteúdo",
        clickToShowMore: "Clique para mostrar mais",
        clickOfAcessProfile: "Clique para acessar o perfil",
        searchPublicationFortitle: "Pesquise pelo título do post",
        in: "em",
        nameCoins: style.names.nameScore,
        people: "pessoas",
        resultsFor: "Resultados para",
        titles: "Títulos",
        genres: {
          male: "do",
          feminine: "da",
          ungenerous: "dx",
        },
        typeYourEmail: "Digite seu e-mail",
      },
    },

    login: {
      cibraTeams: "Acesso",
      textPage: {
        dontWorryWeWillSendYouAMessageToRecoverYourPassword:
          "Fique tranquilo! Enviaremos um e-mail com as instruções pra você recuperar a sua senha. Caso não tenha e-mail, entre em contato com o administrador",
        enterTheEmailAddressAssociatedWithYourAccount:
          "Digite o e-mail associado à sua conta",
        forgotPassword: "Esqueci minha senha",
        iWantToRegister: "Quero me cadastrar",
        rememberMe: "Lembre-se de mim.",
        typeYourPassword: "Digite sua senha",
        typeYourUser: "Digite seu usuário",
        createYourUser: "Crie o nome do seu usuário",
        typeYourCity: "Digite sua cidade",
        invalidToken: "Token Inválido",
      },
    },

    modal: {
      textPage: {
        areYouSureWantToQuit: "Você tem certeza que deseja sair?",
        somethingWentWrong: "Ops, algo deu errado!",
        submitTheForm: "Enviar o formulário?",
        submitTheAnswer: "Enviar a resposta?",
        successModal: "Sucesso!",
        youAlreadyVotedSurvey: "Você já votou nesta enquete!",
        confirmPurchase: "Confirmar compra",
        confirmApps: "Deseja acessar esse link?",
        formSent: "Sua resposta foi enviada.",
        termsOfUse: "Termos de uso",
        youAgreeToOurTermsOfUse: "Você concorda com nossos termos de uso?",
      },
    },

    myNotifications: {
      textPage: {
        notifications: "Notificações",
        notNotifications: "Não há notificações",
      },
    },

    profile: {
      bio: "SOBRE MIM",
      canHelp: "POSSO AJUDAR COM",
      datebirthday: "ANIVERSÁRIO",
      email: "E-MAIL",
      facebook: "FACEBOOK",
      instagram: "INSTAGRAM",
      interests: "INTERESSES",
      linkedin: "LINKEDIN",
      name: "NOME",
      login: "LOGIN",
      phone: "TELEFONE",
      cellPhone: "TELEFONE CELULAR",
      sex: "SEXO",
      gender: "GÊNERO",
      tags: "TAGS",
      twitter: "TWITTER",
      username: "USERNAME",
      otherGender: "OUTRO GÊNERO",
      state: "ESTADO",
      city: "CIDADE",
      timeExperience: "TEMPO DE EXPERIÊNCIA",
      phoneRamal: "RAMAL",

      suvinilProfessional: {
        typeWork: "TIPOS DE TRABALHO QUE REALIZA",
        workRegime: "REGIME DE TRABALHO",
        training: "JÁ FEZ ALGUM TREINAMENTO SUVINIL?",
        interests: "INTERESSES",
        whatTrainings: "QUAIS TREINAMENTOS?",
      },

      textPage: {
        addImage: "Adicionar foto",
        female: "Feminino",
        hello: "Olá",
        FrontEndBackEndDesignBusiness:
          "Front-end, Back-end, Design, Negócios...",
        HowCanYouHelpYouDontHaveToBeAMasterJustWantToHelp:
          "Em que você pode ajudar? Não precisa ser nenhum mestre, basta querer ajudar.",
        male: "Masculino",
        myProfile: "Meu Perfil",
        typeFacebook: "username",
        typeInstagram: "username",
        typeLinkedin: "username",
        typePhone: "(DDD) 12345-6789",
        typeTwitter: "username",
        typeSummaryOfYourBioHere: "Digite aqui um resumo de sua biografia",
        typeYourEmail: "Digite seu e-mail",
        typeYourName: "Digite seu nome",
        typeYourBirthday: "Digite sua data de nascimento",
        typeYourGender: "Digite seu gênero",
        typePhoneRamal: "1234",
      },
    },

    settings: {
      confirmPassword: "CONFIRME A SENHA",
      currentPassword: "SENHA ATUAL",
      newPassword: "NOVA SENHA",

      textPage: {
        autoplayOnVideos: "Autoplay nos vídeos do mural",
        exit: "Sair",
        incorrectCurrentPassword: "Senha atual incorreta",
        informPasswords: "Informe as senhas",
        informCurrentPassword: "Informe a senha atual",
        passwordsDoNotMatch: "As senhas não correspondem",
        receiveNotifications: "Receber notificações",
        termsAndConditions: "Termos e condições",
        privacyPolicy: "Política de Privacidade",
        typeYourCurrentPassword: "Digite sua senha atual",
        createYourNewPassword: "Crie a sua senha",
        typeYourNewPassword: "Digite uma nova senha segura",
        typeYourConfirmPassword: "Confirme a sua senha",
        updatePassword: "Atualizar senha",
        seeProfile: "Ver meu perfil",
      },
    },

    store: {
      awaitRescue: "Aguardando resgate",
      rescuedProducts: "Produtos Resgatados",
      limitReached: "Limite atingido",
      backToStore: "Voltar para a loja",
      textPage: {
        allRightContactHRToRedeemYourProduct: storeRedeemMessage(),
        for: "por",
        free: "Grátis",
        notProductsFound: "Nenhum produto foi encontrado na loja",
        outOfStock: "Sem estoque",
        purchaseSuccessful: "Compra realizada com sucesso",
        requestDate: "Data de solicitação",
        youHave: "Você tem",
        youWantToBuy: "Você deseja comprar",
      },
    },

    apps: {
      textPage: {
        youWillBeRedirectedToThisApplicationWebsite:
          "Você será redirecionado para o site deste aplicativo.",
      },
    },

    publication: {
      textPage: {
        comments: "Comentários",
        likes: "Curtidas",
        toComment: "Comentar",
        toLike: "Curtir",
        commentsTitle: "Publicações recentes",
        noCommentsSoFarBeYouTheFirstToContribute:
          "Nenhum comentário até o momento, seja você, o primeiro a contribuir.",
        noLikesSoFarBeYouTheFirstToLike:
          "Nenhuma curtida até o momento, seja você, o primeiro a curtir.",
        tags: "Tags",
        youEillNotBeAbleToChangeTheInformationLater:
          "Você não conseguirá alterar as informações posteriormente",
        commentInputPlaceholder:
          "Você pode enviar seu comentário, pressionando ctrl + enter.",
        commentInputPlaceholderUserGuest:
          "Usuários convidados não estão permitidos a comentar.",
        commentInputResponsivePlaceholder: "Deixe seu comentário",
        typeYourAnswer: "Digite sua resposta",
        hasNoResults: "Nenhum resultado encontrado.",
      },
    },

    scoreHistory: {
      youHave: "você tem",
      meritMoney: "Merit Money",
      scoreRemoval: "Débito de pontos",
      weekInteration: "Interação semanal",
      youAccumulated: "Você acumulou",
      weeklyScore: "Pontuação semanal",
      onTheLastThirtyDays: "nos últimos 30 dias.",
      inTheLastWeekYouReceived: "Na última semana, você recebeu",
    },
  },
};
