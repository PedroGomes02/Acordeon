import Question from "./components/Question";
import "./App.css";
import { questions } from "./data";
import { FAQContainer } from "./styles";

export default function App() {
  return (
    <>
      <h1>FAQ (Accordion Component)</h1>
      <FAQContainer>
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </FAQContainer>
    </>
  );
}
