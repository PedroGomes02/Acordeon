import { useState } from "react";
import { SectionContainer } from "../../styles";
import { QuestionContainer } from "./styles";

const Question = (props: any) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <SectionContainer>
      <QuestionContainer isOpen={isOpen}>
        <h4>{props.question.title}</h4>
        <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </QuestionContainer>
      {isOpen && <p>{props.question.info}</p>}
    </SectionContainer>
  );
};

export default Question;
