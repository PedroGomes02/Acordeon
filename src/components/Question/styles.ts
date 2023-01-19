import styled from "styled-components";

const QuestionContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.isOpen ? "lightgray" : "white")};
  padding: 0.5rem;

  button {
    background-color: rgb(211, 216, 253);
    border: 2px solid rgb(10, 27, 184);
    border-radius: 5px;
    color: rgb(10, 27, 184);
    font-size: 20px;
  }
`;

export { QuestionContainer };
