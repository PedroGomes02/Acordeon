import styled from "styled-components";

const FAQContainer = styled.div`
  max-width: 600px;
  background-color: rgb(10, 27, 184);
  padding: 10px 20px 20px;
  margin: 1rem auto;
  border-radius: 12px;
  h2 {
    margin: 0 auto;
    padding: 10px 0 20px 0;
    text-align: center;
    color: white;
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;

  p {
    padding: 1rem;
    background-color: lightgray;
  }
`;

export { FAQContainer, SectionContainer };
