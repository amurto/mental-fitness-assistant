import React, { useReducer } from 'react';
import Progress from './Progress';
import Question from './Question';
import Answers from './Answers';
import QuizContext from './QuizContext';

import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
} from './types.js';
import quizReducer from './QuizReducer';
        
const QuizApp4 = () => {
    const questions = [
        {
            id: 1,
            question: ' I feel so restless or find it so hard to keep still that other people have pointed this out to me. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 2,
            question: ' I feel fatigued or low on energy. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 3,
            question: ' I have been enjoying activities that I know carry a significant risk of causing me problems later (e.g., buying sprees, sexual indiscretions, or unusual business investments). ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 4,
            question: ' I have trouble falling asleep, or I find that I sleep longer than I would like. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 5,
            question: ' My appetite seems to change frequently. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 6,
            question: ' I don’t need more than a few hours of sleep to feel rested. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },

        {
            id: 7,
            question: ' I feel very irritable sometimes; the smallest things can really upset me. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 8,
            question: ' I have been more talkative than usual; sometimes I feel like I just have to keep talking. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 9,
            question: ' I have gained or lost more than 5% of my body weight in a single month. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 10,
            question: ' My thoughts feel like they’re racing. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 11,
            question: ' I feel worthless or guilty. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 12,
            question: ' I find that I no longer enjoy some of the activities that I used to like. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 13,
            question: ' I find myself thinking about my own death. ',
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 14,
            question: " I am easily distracted by other things going on, even when I know they are unimportant. ",
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 15,
            question: " I find it hard to think or concentrate, or to make decisions. ",
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 16,
            question: "  I feel especially confident, like nothing can stop me from reaching my goals. ",
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 17,
            question: " Some of the experiences listed above may have been due to my having used alcohol or drugs or taken prescription medications which I have been advised may alter my mood. ",
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        },
        {
            id: 18,
            question: " I have been diagnosed with a medical condition which sometimes affects my mood or energy levels (e.g., hypothyroidism). ",
            answer_0: " No ",
            answer_1: " Yes ",
            answer_2: " ",
            answer_3: " ",
            correct_answer: '',
        },
        {
            id: 19,
            question: " Some of the experiences listed above have caused me problems at work or in my social activities; led to arguments or fights; or left me with family, financial or legal difficulties. ",
            answer_0: " Rarely or none of the time ",
            answer_1: " Occasionally or a little of the time ",
            answer_2: " A moderate amount of the time, more than occasionally ",
            answer_3: " Most or all of the time ",
            correct_answer: '',
        }
    ];

    const initialState = {
        questions,
        currentQuestion: 0,
        currentAnswer: '',
        answers: [],
        showResults: false,
        error: '',
    };

    const [state, dispatch] = useReducer(quizReducer, initialState);
    const {currentQuestion, currentAnswer, answers, showResults, error} = state;

    const question = questions[currentQuestion];

    const renderError = () => {
        if (!error) {
            return ;
        }
        return <div>{error}</div>;
    }

    const restart = () => {
        dispatch({type: RESET_QUIZ});
    };

    const totalScore = () => {
        let total = 0;
        for (let i=0; i<answers.length; i++) {
            total = total + parseInt(answers[i].answer)
        }
        return total;
    }
    
    const next = () => {
        const answer ={questionid:question.id, answer: currentAnswer};

        if (!currentAnswer) {
            dispatch({type: SET_ERROR, error: 'Please select an option'});
            return;
        }

        answers.push(answer);
        dispatch({type: SET_ANSWERS, answers});
        dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

        if (currentQuestion +1 < questions.length) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                currentQuestion: currentQuestion + 1,
            });
            return;
        }
        dispatch({type: SET_SHOW_RESULTS, showResults: true});
    };

    if (showResults) {
        return (
            <div className="container results">
                <h2>Results</h2>
                <ul>{totalScore()}</ul>
                <button className="interface-btn" style={{ backgroundColor: "blue" }} onClick={restart}>
                    Restart
                </button>
            </div>
        )
    } else {
        return (
            <QuizContext.Provider value={{state, dispatch}}>
                <div className="quiz-container">
                    <Progress total={questions.length} current={currentQuestion + 1} />
                    <Question question={question.question} />  
                    <p>{renderError()}</p>
                    <Answers
                        question={question} 
                        currentAnswer={currentAnswer} 
                        dispatch={dispatch} 
                    />
                    <button className="interface-btn" style={{ 
                            backgroundColor: "blue",
                            marginTop: "20px",
                            marginBottom: "10px" 
                        }} onClick={next}>
                        Confirm and Go
                    </button>
                </div>
            </QuizContext.Provider>
        )
    }
};

export default QuizApp4;
