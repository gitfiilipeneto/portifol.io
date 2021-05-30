import { BLUE, WHITE } from "../support/colors";
import styled from "styled-components";

const Button = styled.button`
  width: max-content;
  padding: 10px;
  height: 37px;
  outline: none;
  background-color: ${BLUE};
  color: white;
  margin: 5px;
  border-radius: 60px;
  border: 1px ${BLUE} solid;
  cursor: pointer;

  &:hover {
    /* transform: scale(1.1); */
    transform: 2s ease-in-out;
    color: white;
    width: 205px;
    padding: 0;
  }
`;

export default Button;
