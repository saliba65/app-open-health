/* eslint-disable import/named */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import { style } from "../../../style";
import { manageClasses } from "../../../helpers/sharedHelpers";
import { ReactComponent as CheckIcon } from "../../../assets/icons/checkIcon.svg";
import RadionCheckedIcon from "../../../assets/icons/radionCheckedIcon.png";
import RadionDeselectedIcon from "../../../assets/icons/radionDeselectedIcon.png";
import { ReactComponent as EyeIcon } from "../../../assets/icons/IconEye.svg";
import { ReactComponent as EyeOffIcon } from "../../../assets/icons/IconEyeOff.svg";
import Flex from "../Grid/Flex";

import {
  InputLabel,
  InputStyle,
  InputMaskStyle,
  InputError,
  TextareaStyle,
  SelectStyle,
  OptionStyle,
  CheckboxContainer,
  CheckboxStyle,
  InputIcon,
  SwitchStyle,
  RadioContainer,
  RadioStyle,
  ContainerQuestionsChecked,
  TextStyleChecked,
  ContainerCheckedStyle,
  MultiSelect,
  ContainerSelectStyle,
  ContainerCheckBoxes,
  CheckBoxLabel,
  OverSelect,
  Checkbox,
  ContainerRadioButtonGeneric,
  ContentOptionRadioButton,
  InputTextTittle,
  ContentImgRadionIcon,
  ImgRadioIcon,
  InputPrefix,
  ContaineIconPassword,
  TextLink,
} from "./FormStyle";

export const Input = ({
  type,
  name,
  label,
  error,
  iconSrc,
  onChange,
  placeholder,
  disabled,
  value,
  prefix,
  typePasswordShow = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [typeValue, setTypeValue] = useState(type);

  return (
    <Flex width={1} flexDirection="column">
      {label && (
        <InputLabel variant={manageClasses({ focused })}>{label}</InputLabel>
      )}
      <Flex>
        {iconSrc && <InputIcon typeIcon={iconSrc} />}
        {prefix && <InputPrefix icon={!!iconSrc}>{prefix}</InputPrefix>}
        <InputStyle
          icon={!!iconSrc}
          prefix={!!prefix}
          type={typeValue}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          showPassword={!!typePasswordShow}
          variant={manageClasses({ error, disabled })}
        />
        {typePasswordShow && (
          <ContaineIconPassword>
            {typeValue === "text" ? (
              <EyeIcon onClick={() => setTypeValue("password")} />
            ) : (
              <EyeOffIcon onClick={() => setTypeValue("text")} />
            )}
          </ContaineIconPassword>
        )}
      </Flex>
      {error && <InputError>{error}</InputError>}
    </Flex>
  );
};

export const InputMask = ({
  type,
  mask,
  maskChar,
  name,
  label,
  error,
  iconSrc,
  onChange,
  placeholder,
  disabled,
  value,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Flex width={1} flexDirection="column">
      {label && (
        <InputLabel variant={manageClasses({ focused })}>{label}</InputLabel>
      )}
      <Flex>
        {iconSrc && <InputIcon typeIcon={iconSrc} />}
        <InputMaskStyle
          mask={mask}
          maskChar={maskChar}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          label={label}
          onFocus={() => setFocused(true)}
          variant={manageClasses({ error, disabled })}
        />
      </Flex>
      {error && <InputError>{error}</InputError>}
    </Flex>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Type some placeholder",
};

export const Textarea = ({
  label,
  name,
  rows,
  onChange,
  placeholder,
  error,
  value,
  isPersonalQuestion,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Flex flexDirection="column">
      {label && (
        <InputLabel
          variant={manageClasses({ focused })}
          isPersonalQuestion={isPersonalQuestion}
        >
          {label}
        </InputLabel>
      )}
      <TextareaStyle
        name={name}
        rows={rows}
        error={error}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Flex>
  );
};

Textarea.defaultProps = {
  rows: 5,
  label: "Label textarea",
  placeholder: "Placeholder de textarea",
};

export const Select = ({ label, options, onChange, value, error }) => (
  <Flex flexDirection="column">
    {label && <InputLabel>{label}</InputLabel>}
    <SelectStyle value={value} onChange={onChange}>
      <OptionStyle>Selecione uma opção</OptionStyle>
      {options.map(({ text, id, value }) => (
        <OptionStyle key={id} value={value}>
          {text}
        </OptionStyle>
      ))}
    </SelectStyle>
    {error && <InputError>{error}</InputError>}
  </Flex>
);

export const SelectMultiple = ({ label, options, onChange, error }) => {
  const [expanded, setExpanded] = useState(false);
  const [optionsCheck, setOptionsCheck] = useState([]);
  const [node, setNode] = useState(null);

  const isChecked = useCallback(() => {
    onChange(options?.filter((opt) => opt.checked));
    const checkedOptions = options?.filter((opt) => opt.checked === true);
    setOptionsCheck(checkedOptions);
  }, [options, onChange]);

  const handleChecked = (id) => {
    options?.map((opt) => (opt.id === id ? (opt.checked = !opt.checked) : opt));
    isChecked();
  };

  useEffect(() => {
    isChecked();
  }, []);

  const handleOutsideClick = (e) => {
    if (!node.contains(e.target)) {
      setExpanded(false);
      document.removeEventListener("click", handleOutsideClick);
    }
  };

  const handleClick = () => {
    if (!expanded) {
      document.addEventListener("click", handleOutsideClick);
    }
    setExpanded(!expanded);
  };

  return (
    <Flex flexDirection="column">
      {label && <InputLabel>{label}</InputLabel>}
      <MultiSelect ref={(node) => setNode(node)}>
        <ContainerSelectStyle onClick={() => handleClick()}>
          <SelectStyle>
            <OptionStyle>
              {optionsCheck.length === 0 && "selecione uma ou mais opções"}
              {optionsCheck.length === 1 && `${optionsCheck[0].text}`}
              {optionsCheck.length > 1 &&
                `${optionsCheck.length} opções selecionadas`}
            </OptionStyle>
          </SelectStyle>
          <OverSelect />
        </ContainerSelectStyle>
        {expanded && (
          <ContainerCheckBoxes>
            {options.map(({ text, id, checked }) => (
              <CheckBoxLabel key={id} onClick={() => handleChecked(id)}>
                <Checkbox checked={checked} /> {text}
                {checked && <CheckIcon className="checked-icon" />}
              </CheckBoxLabel>
            ))}
          </ContainerCheckBoxes>
        )}
        {error && <InputError>{error}</InputError>}
      </MultiSelect>
    </Flex>
  );
};

export const RadioButton = ({
  id,
  checked,
  onChange,
  disabled,
  label,
  group,
  endDate,
  allVotesAmount,
  votesAmount,
}) => {
  const date = useState(new Date());
  return (
    <RadioContainer htmlFor={id}>
      {disabled || Date.parse(endDate) < Date.parse(date) ? (
        <ContainerQuestionsChecked checkedSelected={checked}>
          <TextStyleChecked checkedSelected={checked}>
            <span>{label}</span>
            {allVotesAmount && (
              <span>{((votesAmount / allVotesAmount) * 100).toFixed(0)}%</span>
            )}
          </TextStyleChecked>
          <ContainerCheckedStyle
            checkedSelected={checked}
            porcentageWidth={(votesAmount / allVotesAmount) * 100}
          />
        </ContainerQuestionsChecked>
      ) : (
        <Flex>
          <RadioStyle
            id={id}
            value={id}
            name={group}
            checked={checked}
            onChange={(e) => !disabled && onChange(e)}
            disabled={disabled}
            variant={manageClasses({ disabled })}
            type="radio"
          />
          <span>{label}</span>
          {checked && <CheckIcon className="checked-icon" />}
        </Flex>
      )}
    </RadioContainer>
  );
};

export const CheckBox = ({ id, checked, onChange, group, disabled, label }) => {
  const [checkedBox, setCheckedBox] = useState(checked);
  const callAction = (e) => {
    setCheckedBox(!checkedBox);
    onChange && onChange(e);
  };

  useEffect(() => {
    setCheckedBox(checked);
  }, [checked]);

  return (
    <CheckboxContainer htmlFor={`checkbox${id}`}>
      <CheckboxStyle
        id={`checkbox${id}`}
        onClick={(e) => !disabled && callAction(e)}
        name={group}
        value={id}
        checked={checkedBox}
        disabled={disabled}
        variant={manageClasses({ disabled })}
        type="checkbox"
      />
      <span>{label}</span>
      {checkedBox && <CheckIcon className="checked-icon" />}
    </CheckboxContainer>
  );
};

export const Switch = ({ active, onChange }) => (
  <SwitchStyle
    data-testid="switch-element"
    variant={manageClasses({ checked: active })}
    onClick={() => {
      !active;
      onChange();
    }}
  />
);

export const SwitchProfilePerfil = ({ title, active, onChange }) => (
  <Flex alignItems="center" spaceChildren={3}>
    <TextLink>{title}</TextLink>
    <SwitchStyle
      data-testid="switch-element"
      variant={manageClasses({ checked: active })}
      onClick={() => {
        !active;
        onChange();
      }}
    />
  </Flex>
);

export const RadioButtonGeneric = ({ options, onChange, optionSelected }) => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (optionSelected) {
      setSelectedOption(optionSelected);
    } else {
      setSelectedOption(style.names.nameApp);
    }
  }, [optionSelected]);

  const handleSelectedOption = (value) => {
    onChange(value);
    setSelectedOption(value);
  };

  return (
    <ContainerRadioButtonGeneric>
      {options?.map((value, index) => (
        <ContentOptionRadioButton
          key={index}
          onClick={() => handleSelectedOption(value)}
        >
          <ContentImgRadionIcon>
            {value === selectedOption ? (
              <ImgRadioIcon src={RadionCheckedIcon} alt="checked" />
            ) : (
              <ImgRadioIcon src={RadionDeselectedIcon} alt="deselected" />
            )}
          </ContentImgRadionIcon>
          <InputTextTittle>{value}</InputTextTittle>
        </ContentOptionRadioButton>
      ))}
    </ContainerRadioButtonGeneric>
  );
};
