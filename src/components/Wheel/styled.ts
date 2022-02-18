import styled from "styled-components";

interface OptionProps {
  selected: boolean;
}

interface Active {
  active: boolean;
}

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-right: 2rem;
`;

export const StyledDropDownContainer = styled.div`
  position: relative;
  min-width: 150px;
  margin-top: 0rem
`;

export const StyledDropDownButton = styled.button`
  position: relative;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 2px solid #e4e4e4;
  outline: none;
  border-radius: 15px;
  cursor: pointer;
  z-index: 99;
  margin-top: 1rem;
`;

export const StyledDropDownButtonArrow = styled.div<Active>`
  position: relative;
  pointer-events: none;
  width: 20px;
  height: 20px;

  ::after {
    position: absolute;
    top: 50%;
    right: 0;
    margin: auto 0;
    content: " ";
    width: 10px;
    height: 2px;
    background: #808080;
    border-radius: 10px;
    transform: ${(props) =>
      props.active ? "rotate(45deg)" : "rotate(-45deg)"};
    transition: all ease-out 0.15s;
  }

  ::before {
    position: absolute;
    top: 50%;
    right: 30%;
    margin: auto 0;
    content: " ";
    width: 10px;
    height: 2px;
    background: #808080;
    border-radius: 10px;
    transform: ${(props) =>
      props.active ? "rotate(-45deg)" : "rotate(45deg)"};
    transition: all ease-out 0.15s;
  }
`;

export const StyledDropDownDrawer = styled.div<Active>`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: ${(props) => (props.active ? "200px" : "20px")};
  border-radius: 15px;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  background: #fff;
  border: 2px solid #e4e4e4;
  outline: none;
  border-radius: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all ease-out 0.15s;

  ::-webkit-scrollbar {
    display: none;
    width: 5px;
    background: transparent;
    margin: 0 10px;
  }

  ::-webkit-scrollbar-track {
    background: #e4e4e4;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export const StyledDropDownOption = styled.div<OptionProps>`
  padding: 15px;
  background: ${(props) => (props.selected ? "#808080" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  text-align: left;
  cursor: pointer;

  :hover {
    background: #e4e4e4;
    color: #000;
  }
`;

export const StyledDropDownText = styled.div<Active>`
  color: ${(props) => (!props.active ? "#000" : "#e4e4e4")};
`;

export const StyledDropdownLabel = styled.div`
  position: absolute;
  top: -12.5px;
  left: 25px;
  font-size: 12px;
  background: #fff;
  color: #000;
  z-index: 999;
  padding: 5px;
`;
