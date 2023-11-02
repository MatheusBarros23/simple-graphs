import styled from "styled-components";

export const SelectDirectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 15px;
    gap: 15px;
`

export const Switch = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 54px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;
`;

export const SliderBefore = styled.span`
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
  box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.06), 0px 3px 8px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const CheckboxInput = styled.input`
    display: none;
`

export const StyledSwitch = styled(Switch)`
  input:checked + ${Slider} {
    background-color: #34C759;
  }

  input:focus + ${Slider} {
    box-shadow: 0 0 1px #34C759;
  }

  input:checked + ${Slider} + ${SliderBefore} {
    transform: translateX(20px);
  }

  &.round {
    ${Slider} {
      border-radius: 34px;
    }

    ${SliderBefore} {
      border-radius: 50%;
    }
  }
`;
