import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ModalProvider } from "styled-react-modal";
import { ReactComponent as Error } from "../../../assets/icons/error.svg";
import { ReactComponent as Success } from "../../../assets/icons/success.svg";
import Flex from "../Grid/Flex";
import Button from "../Button/Button";

import * as S from "./AlertModalStyle";

const AlertModal = () => {
  const { alerts: dataAlerts } = useSelector(state => state.alert);

  const FancyModalButton = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleModal = () => setIsOpen(!isOpen);
    return (
      <S.StyledModal
        data-testid="modal-component"
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        type={dataAlerts.type && true}
      >
        {dataAlerts.type === "success"
          ? <S.ContainerType type={dataAlerts.type}>
              <Success />
            </S.ContainerType>
          : dataAlerts.type === "errors" &&
            <S.ContainerType type={dataAlerts.type}>
              <Error />
            </S.ContainerType>}
        <S.ContainerModal>
          {dataAlerts.title &&
            <S.TitleModal>
              {dataAlerts.title}
            </S.TitleModal>}

          <S.SubTitle>
            {dataAlerts.msg}
          </S.SubTitle>
          {dataAlerts.buttons
            ? <Flex spaceChildren={4}>
                {dataAlerts.buttons.map(bt => {
                  const { variant, title, event } = bt;
                  return (
                    <Button
                      name={title}
                      variant={variant}
                      onClick={() => {
                        event && event();
                        toggleModal();
                      }}
                    />
                  );
                })}
              </Flex>
            : <Button onClick={toggleModal} name="OK" />}
        </S.ContainerModal>
      </S.StyledModal>
    );
  };

  return (
    <ModalProvider>
      {Object.keys(dataAlerts).length > 0 && <FancyModalButton />}
    </ModalProvider>
  );
};

AlertModal.propTypes = {
  dataAlerts: PropTypes.object
};

export default AlertModal;
