import {styled} from "styled-components";

  return (
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#7b151a" : "#CD212A")};
  background-color: ${(props) => (props.border ? "transparent" : "#CD212A")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#7b151a" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#7b151a")};
    border: 1px solid #7b151a;
    color: ${(props) => (props.border ? "#CD212A" : "#fff")};
  }
`;

