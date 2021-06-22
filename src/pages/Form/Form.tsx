import {Question} from "../../types/QuestionTypes";
import {useState} from "react";
import YesNoQuestion from "../../components/YesNoQuestion/YesNoQuestion";
import styles from "./Form.module.css";

// TODO Replace with API request to backend
const questions: Question[] = [
    {
        type: 'YesNo',
        prompt: 'Has keyboard?'
    },
    {
        type: 'YesNo',
        prompt: 'Has mouse?'
    },
    {
        type: 'YesNo',
        prompt: 'Are you Chris?'
    }
]

export default function Form() {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<any[]>([]);

    function questionToComponent(question: Question) {
        switch(question.type) {
            case "YesNo":
                return <YesNoQuestion prompt={question.prompt} onSelect={answerQuestion}/>
            default:
                return <div></div>
        }
    }

    function answerQuestion(value: any) {
        setAnswers([...answers, value]);
        setQuestionIndex(questionIndex + 1);
    }

    return <div className={styles.container}>
        {
            questions[questionIndex] && questionToComponent(questions[questionIndex])
        }
    </div>
}