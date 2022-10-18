import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./LoginStyle";
import urls from "../../constants/urls";
import { FormattedMessage, useIntl } from "react-intl";
import { style } from "../../style";
import Flex from "../../components/core/Grid/Flex";
import { Input, CheckBox } from "../../components/core/Form/Form";
import Button from "../../components/core/Button/Button";

import { ReactComponent as SvgLogo } from "../../assets/img/Logo.svg";
import { createBrowserHistory } from "history";
import { AuthActions } from "../../store/auth/auth.ducks";

const Login = () => {
  const history = createBrowserHistory();
  const intl = useIntl();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const rememberMe = localStorage.getItem("rememberMe");
  const handleSignIn = values => dispatch(AuthActions.signIn(values));
  // const { isLoading } = useSelector(state => state.auth);

  const handleLogin = async event => {
    console.log(email, password);
    event.preventDefault();

    handleSignIn({ email: email, password: password });
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    setEmail(localStorage.getItem("uid"));
    localStorage.setItem("nameApp", style.api.nameProfile);
  }, []);

  return (
    <S.LoginContainer>
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
            <a href="#!" onClick={() => history.push(urls.ROUTES.LOGIN)}>
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
