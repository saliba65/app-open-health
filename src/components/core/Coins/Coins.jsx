/* eslint-disable react/prop-types */
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import urls from "../../../constants/urls";
import { ReactComponent as IconCoins } from "../../../assets/icons/iconCoins.svg";
import { ReactComponent as IconCoinsPLus } from "../../../assets/icons/iconCoinsPLus.svg";
import { Link } from "react-router-dom";
import { CoinsValue, CoinsPlusStyle, Score, Coins } from "./CoinsStyle";

export const CoinsUser = ({ score, coinsName, bigSize }) => {
  const intl = useIntl();

  return (
    <Coins>
      <Link
        title={intl.messages["general.textPage.viewHistoryOfMyCoins"]}
        to={urls.ROUTES.SCORE_HISTORY}
      >
        <CoinsValue spaceChildren={2}>
          <IconCoins width={bigSize ? 24 : 18} height={bigSize ? 24 : 18} />
          <Score>
            {score} {coinsName && <FormattedMessage id={coinsName} />}
          </Score>
        </CoinsValue>
      </Link>
    </Coins>
  );
};

export const CoinsCourse = ({ score, coinsName, bigSize }) =>
  <CoinsPlusStyle data-testid="coins-element">
    <IconCoinsPLus width={bigSize ? 31 : 18} height={bigSize ? 31 : 18} />
    <Score bigSize={bigSize}>{`+ ${score}`}</Score>
    {coinsName && <FormattedMessage id={coinsName} />}
  </CoinsPlusStyle>;
