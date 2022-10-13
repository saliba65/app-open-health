import React, { useState, useEffect } from "react";
import * as S from "./LoginStyle";
import urls from "../../constants/urls";
import { FormattedMessage, useIntl } from "react-intl";
import { style } from "../../style";
import Flex from "../../components/core/Grid/Flex";
import { Input, CheckBox } from "../../components/core/Form/Form";
import Button from "../../components/core/Button/Button";

import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as SvgLogo } from "../../assets/img/Logo.svg";
import { createBrowserHistory } from "history";

const Login = () => {
  const history = createBrowserHistory();
  const intl = useIntl();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const rememberMe = localStorage.getItem("rememberMe");
  // const { isLoading } = useSelector(state => state.auth);

  const handleLogin = async event => {
    console.log(email, password);
    // event.preventDefault();
    // let recaptchaSuccess = undefined;

    // if (style.names.nameApp === "Pintou Parceria Suvinil") {
    //   const token = await getToken();

    //   const { success: responseSucces } = await validateRecaptcha(token);

    //   recaptchaSuccess = responseSucces;
    // } else {
    //   recaptchaSuccess = true;
    // }
    // dispatch(
    //   AuthActions.userAuthRequest({ email, password, recaptchaSuccess })
    // );
  };

  useEffect(() => {
    setEmail(localStorage.getItem("uid"));
    localStorage.setItem("nameApp", style.api.nameProfile);
  }, []);

  return (
    <S.LoginContainer>
      <S.ContainerArrowLeft
        showArrowLeft={history.location.pathname === urls.ROUTES.SIGNUP}
      >
        <ArrowLeftIcon onClick={() => history.push(urls.ROUTES.LOGIN)} />
      </S.ContainerArrowLeft>
      <S.LogoCompany>
        {style.icons.loginIcon
          ? <img src={style.icons.loginIcon} alt="" />
          : <SvgLogo />}
      </S.LogoCompany>
      <S.LoginForm>
        <S.Form onSubmit={event => handleLogin(event)}>
          <Flex mb={4}>
            <Input
              type="text"
              name="email"
              placeholder={`${intl.messages["login.textPage.typeYourUser"]}`}
              label={intl.messages["general.user"]}
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </Flex>
          <Input
            type="password"
            name="password"
            typePasswordShow
            value={password}
            placeholder={`${intl.messages["login.textPage.typeYourPassword"]}`}
            label={intl.messages["general.password"]}
            onChange={e => setPassword(e.target.value)}
          />
          <S.BoxForgetPassword>
            <a
              href="#!"
              onClick={() => history.push(urls.ROUTES.FORGET_PASSWORD)}
            >
              <FormattedMessage id="login.textPage.forgotPassword" />
            </a>
          </S.BoxForgetPassword>
          <S.BoxRememberMe HtmlFor="rememberMe">
            <CheckBox
              id="rememberMe"
              label={intl.messages["login.textPage.rememberMe"]}
              labelSize="14px"
              checked={rememberMe}
              onChange={e => {
                localStorage.setItem("rememberMe", e.target.checked);
              }}
            />
          </S.BoxRememberMe>
          <Button
            style={{ alignSelf: "center" }}
            mt={4}
            type="submit"
            variant={["gradient"]}
            name={intl.messages["general.buttons.enter"]}
            // isLoading={isLoading}
          />
        </S.Form>
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Login;
