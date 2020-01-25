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
        
const QuizApp3 = () => {
    const questions = [
        {
            id: 1,
            question: 'I have trouble speaking the words I want to say, or I am able to speak but other people have told me that what I say is incoherent.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 2,
            question: 'I see or hear things that other people cannot see or hear.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 3,
            question: 'I have had the experience of being completely unable to speak.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 4,
            question: 'I sometimes have trouble distinguishing whether something I experience or perceive may be real or may only be part of my imagination or my dreams.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 5,
            question: 'I have heard two or more voices conversing with one another in voices that other people would not be able to hear.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 6,
            question: 'I think other people can sometimes read my mind, or I can read other’s minds.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },

        {
            id: 7,
            question: 'I sometimes find that something interrupts or controls my thoughts, feelings, or actions.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 8,
            question: 'I believe that someone may be planning to cause me harm, or may be about to cause me harm in the near future.',
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 9,
            question: " I believe I have special or supernatural gifts beyond my natural talents.",
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 10,
            question: "I sometimes feel completely unresponsive emotionally, as if I don’t feel anything.",
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 11,
            question: "I have heard one or more people mumbling or talking about my behaviour or my thoughts in voices that other people would not be able to hear.",
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 12,
            question: "I have difficulty getting myself organised to complete any kind of daily activity.",
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 13,
            question: "I think I may be able to predict what will happen in the future.",
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 14,
            question: "As a result of starting to have some of the experiences listed above, I have experienced significant problems with work, my relationships or social activities, or my ability to look after myself.",
            answer_0: " No, not at all ",
            answer_1: " Yes, slightly ",
            answer_2: " Yes, somewhat or moderately ",
            answer_3: " Yes, definitely ",
            correct_answer: '',
        },
        {
            id: 15,
            question: "Some of the experiences listed above may have been due to my having used alcohol or drugs or taken prescription medications which I have been advised may alter my mood or behaviour.",
            answer_0: " No ",
            answer_1: " Yes ",
            answer_2: "",
            answer_3: "",
            correct_answer: '',
        },
        {
            id: 16,
            question: "I have been diagnosed with a medical condition which I have been advised may affect my mood or behaviour.",
            answer_0: " No ",
            answer_1: " Yes ",
            answer_2: "",
            answer_3: "",
            correct_answer: '',
        },
        {
            id: 17,
            question: "I have previously been diagnosed with a mental disorder that I have been told might account for the types of experiences above, or I believe that I may be experiencing such a disorder. This might include Schizoaffective Disorder and Mood Disorder With Psychotic Features, as well as Autistic Disorder or another Pervasive Developmental Disorder.",
            answer_0: " No ",
            answer_1: " Yes ",
            answer_2: "",
            answer_3: "",
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

export default QuizApp3;
