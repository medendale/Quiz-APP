import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState} from 'react';
import  ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";
import './Question.css';

const Question = ({
    currentQuestion,
    setCurrentQuestion,
    questions,
    options,
    correct,
    setScore,
    score,
}) => {

    const [ selected, setSelected ] = useState();
    const [ error, setError ] = useState(false);

    const history = useHistory();
    const handleSelect = (i) => {
        if (selected === i && selected === correct) return 'selected';
        else if (selected === i && selected !== correct) return 'wrong';
        else if ( i=== correct) return 'selected';
    };
    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };

    const handleNext = () => {
        if (currentQuestion > 8) {
            history.push('/result')
        }else if (selected){
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
        }else {
            setError('Please select an option first');
        }
    };
    const handleQuit = () => {
      setCurrentQuestion(0);

    }

      return (
        <div className="question">
          <h1>Question {currentQuestion + 1} :</h1>
    
          <div className="singleQuestion">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {options &&
                options.map((i) => (
                  <button
                    className={`singleOption  ${selected && handleSelect(i)}`}
                    key={i}
                    onClick={() => handleCheck(i)}
                    disabled={selected}
                  >
                    {i}
                  </button>
                ))}
            </div>
            <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
     
          >
            {currentQuestion > 20 ? "Submit" : "Next Question"}
          </Button>
                    </div>

            </div>
        </div>
        );
};

export default Question;
