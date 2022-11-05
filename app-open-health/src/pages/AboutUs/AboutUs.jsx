import React from "react";
import { useIntl } from "react-intl";

import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import * as S from "./AboutUsStyle";
import logo from "../../assets/img/openHealthLogo.png";

const AboutUs = () => {
  const intl = useIntl();

  return (
    <Portal>
      <PageTitle title={intl.messages["menu.aboutUs"]} />
      <S.GeneralContainer>
        <S.ContentDetails>
          <S.ImgContainer src={logo} />
          <S.TextContent>
            <S.Text>
              Open health (saúde aberta) é um movimento para tornar todos os
              aspectos da saúde abertos, transparentes e acessíveis. Ou seja, as
              informações sobre os pacientes seriam livremente compartilhadas
              entre empresas de planos e instituições de saúde.
              <br /> <br />
              O movimento tem três objetivos principais:
              <br /> <br />
              <li>tornar a saúde aberta e transparente;</li>
              <li>tornar os dados de saúde abertos e acessíveis;</li>
              <li>tornar a pesquisa médica aberta e colaborativa.</li>
              <br />
              Na prática, baseia-se na crença de que o acesso aberto a
              informações e dados pode ajudar a melhorar a qualidade dos
              cuidados de saúde, torná-los mais acessíveis e, em última
              instância, ajudar a salvar mais vidas.
              <br /> <br />
              O primeiro passo para atingir esses objetivos é tornar os dados de
              saúde abertos e acessíveis.
              <br /> <br />
              Esses dados incluem tudo: desde registros médicos eletrônicos até
              dados genômicos.
              <br /> <br />
              Compartilhar essas informações vai permitir que os pesquisadores
              desenvolvam novos tratamentos e curas para doenças, bem como criem
              melhores ferramentas para diagnosticar e prevenir doenças.
              <br /> <br />
              Além disso, possibilitará que os pacientes assumam um papel mais
              ativo em seus próprios cuidados, permitindo que eles acessem seus
              registros médicos e tomem decisões informadas.
              <br /> <br />
              O segundo objetivo é tornar a saúde aberta e transparente. Ou
              seja, que as informações de hospitais, clínicas, médicos e
              seguradoras sejam acessíveis.
              <br /> <br />
              Também significa fornecer aos pacientes a capacidade de comparar
              diferentes provedores e escolher a melhor opção para suas
              necessidades.
              <br /> <br />
              Assim, trata-se garantir que todas as partes interessadas no
              sistema de saúde sejam responsabilizadas por suas ações.
              <br /> <br />
              O terceiro objetivo do movimento de saúde aberta é tornar a
              pesquisa médica aberta e colaborativa.
              <br /> <br />
              Ou seja, conceder acesso aos dados de ensaios clínicos para que
              qualquer pessoa possa analisá-los e usá-los para desenvolver novos
              tratamentos.
              <br /> <br />
              Um dos caminhos para isso é, por exemplo, criar uma plataforma
              aberta em que os pesquisadores possam compartilhar ideias e
              trabalhar juntos em projetos.
              <br /> <br />
              <h3>O open health no Brasil</h3>
              <br />
              O Brasil apresenta um cenário bem distinto no que se refere ao
              open health. Isso porque, de acordo com o que disse o próprio
              Ministro da Saúde em 2022, a implementação do movimento é questão
              de tempo.
              <br /> <br />
              Conforme entrevista ao Valor Econômico, no começo do ano, o
              objetivo do governo é estimular a concorrência no mercado de
              planos de saúde.
              <br /> <br />
              A inspiração vem do movimento de open finance, que prega
              justamente o compartilhamento de dados financeiros das pessoas
              entre instituições bancárias, operadoras de câmbio, entre outros
              negócios do tipo.
              <br /> <br />
              A princípio, a saúde aberta no Brasil visa democratizar o acesso a
              planos de saúde privados, possibilitando que as operadoras lapidem
              seus planos a preços adequados à realidade e às necessidades
              individuais.
              <br /> <br />
              <h3>Concluindo</h3>
              <br />
              A saúde aberta é um tema em ascensão, mas uma tendência que tem
              tudo para se tornar realidade ao longo dos próximos anos.
              <br /> <br />
              Por isso, conhecer o conceito de forma aprofundada é essencial
              para que o seu negócio esteja verdadeiramente preparado.
              <br /> <br />
            </S.Text>
          </S.TextContent>
        </S.ContentDetails>
      </S.GeneralContainer>
    </Portal>
  );
};

export default AboutUs;
