import {
    StyledContainer,
    StyledDropDownButton,
    StyledDropDownButtonArrow,
    StyledDropDownContainer,
    StyledDropDownDrawer,
    StyledDropdownLabel,
    StyledDropDownOption,
    StyledDropDownText
  } from "./styledTyre";
  import { FC, useState } from "react";
  
  type Options = {
    text: string;
    value: string;
  };
  
  interface DropdownProps {
    options: Array<Options>;
    label?: string;
    placeholder: string;
    handleChange: Function;
    onChange: Function;
    onChangeValue: Function;
    handleChangeText: Function;
  }
  
  const TyreSize: FC<DropdownProps> = ({
    options = [],
    handleChange,
    handleChangeText,
    onChange,
    onChangeValue,
    label,
    placeholder
  }) => {
    const [value, setValue] = useState<string>(placeholder);
    const [text, setText] = useState<string>(placeholder)
    const [active, setActive] = useState<boolean>(false);
  
    return (
      <StyledContainer>
        <StyledDropDownContainer>
          {label && <StyledDropdownLabel>{label}</StyledDropdownLabel>}
          <StyledDropDownButton
          data-testid="TyreSize_Dropdown_Button"
            disabled={options.length === 0}
            onClick={() => setActive(!active)}
          >
            <StyledDropDownText active={options.length === 0}>
              {options.length === 0
                ? "Empty"
                : options.filter((e) => value === e.value)[0]?.text || value}
            </StyledDropDownText>
            <StyledDropDownButtonArrow active={active} />
          </StyledDropDownButton>
          <StyledDropDownDrawer active={active} data-testid="TyreSize_Dropdown_Drawer">
            {options.map((option: Options, index: number) => (
              <StyledDropDownOption
                data-testid="TyreSize_Dropdown_Styled"
                key={index}
                onClick={() => {
                  setValue(option.value);
                  setText(option.text)
                  handleChange(option.value);
                  handleChangeText(option.text)
                  setActive(false);
                  onChange(option.text)
                  onChangeValue(option.value)
                }}
                selected={value === option.value}
              >
                {option.text}
              </StyledDropDownOption>
            ))}
          </StyledDropDownDrawer>
        </StyledDropDownContainer>
      </StyledContainer>
    );
  };
  
  export default TyreSize;
  