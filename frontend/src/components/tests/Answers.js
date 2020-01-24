import React, { useContext } from 'react';
import Answer from './Answer';
import QuizContext from './QuizContext';

const Answers = () => {
    const {state, dispatch} = useContext(QuizContext);
    const {currentAnswer, currentQuestion, questions} = state;
    const question = questions[currentQuestion];
    return (
        <>
            <Answer 
                letter="0" 
                answer={question.answer_0} 
                dispatch={dispatch}
                selected={currentAnswer === '0'}
            />
            <Answer 
                letter="1" 
                answer={question.answer_1} 
                dispatch={dispatch}
                selected={currentAnswer === '1'}
            />
            <Answer 
                letter="2" 
                answer={question.answer_2} 
                dispatch={dispatch}
                selected={currentAnswer === '2'}
            />
            <Answer 
                letter="3" 
                answer={question.answer_3}  
                dispatch={dispatch}
                selected={currentAnswer === '3'}
            />
        </>
    );
};

export default Answers;
