import { CircularProgress } from '@material-ui/core';
import { useEffect, useState} from 'react';
import './Quiz.css';
import Question from '../../components/Question/Question';

const Quiz = ({name, score ,questions , setScore}) => {
    const [ options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        setOptions(
          questions && 
            handleShuffle([
                questions[currentQuestion]?.correct_answer,
                ...questions[currentQuestion]?.incorrect_answers,
            ])
            );
    }, [currentQuestion, questions]);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };
  return (
  <div className='quiz'>
      <span className='subtitle'> Welcome, {name} </span>
      {questions ? (
      <> 
        <div className='quizInfo'>
          <span>{questions[currentQuestion].category}</span>
            <span>
              {/* {{questions[cureentQuestions].difficulty }} */}
                  Score : {score}
                  </span>
            </div>
            <Question 
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            />
        </> 
        ) : (
      <CircularProgress 
        style={{ margin:100}} 
        color= 'inherit'
        size={150}
        thickness={1}
      />
        )}
  </div>
    );
};

export default Quiz;
