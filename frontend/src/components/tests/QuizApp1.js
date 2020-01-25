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
        
const QuizApp1 = () => {
    const questions = [
        {
            id: 1,
            question: '',
            answer_0:'I do not feel sad. ',
            answer_1: "I feel sad. ",
            answer_2: "I am sad all the time and I can't snap out of it. ",
            answer_3: "I am so sad and unhappy that I can't stand it.",
            correct_answer: '',
        },
        {
            id: 2,
            question: '',
            answer_0: 'I am not particularly discouraged about the future. ',
            answer_1: 'I feel discouraged about the future. ',
            answer_2: 'I feel I have nothing to look forward to. ',
            answer_3: 'I feel the future is hopeless and that things cannot improve. ',
            correct_answer: '',
        },
        {
            id: 3,
            question: '',
            answer_0: 'I do not feel like a failure. ',
            answer_1: 'I feel I have failed more than the average person. ',
            answer_2: "As I look back on my life, all I can see is a lot of failures. ",
            answer_3: "I feel I am a complete failure as a person. ",
            correct_answer: '',
        },
        {
            id: 4,
            question: '',
            answer_0: 'I get as much satisfaction out of things as I used to. ',
            answer_1: "I don't enjoy things the way I used to. ",
            answer_2: "I don't get real satisfaction out of anything anymore. ",
            answer_3: 'I am dissatisfied or bored with everything. ',
            correct_answer: '',
        },
        {
            id: 5,
            question: '',
            answer_0: "I don't feel particularly guilty",
            answer_1: 'I feel guilty all of the time.',
            answer_2: 'I feel quite guilty most of the time.',
            answer_3: 'I feel guilty all of the time.',
            correct_answer: '',
        },
        {
            id: 6,
            question: "",
            answer_0: "I don't feel I am being punished. ",
            answer_1: "I feel I may be punished. ",
            answer_2: "I expect to be punished. ",
            answer_3: "I feel I am being punished.",
            correct_answer: '',
        },

        {
            id: 7,
            question: "",
            answer_0: "I don't feel disappointed in myself. ",
            answer_1: "I am disappointed in myself. ",
            answer_2: "I am disgusted with myself. ",
            answer_3: "I hate myself. ",
            correct_answer: '',
        },
        {
            id: 8,
            question: "",
            answer_0: "I don't feel I am any worse than anybody else. ",
            answer_1: "I am critical of myself for my weaknesses or mistakes. ",
            answer_2: "I blame myself all the time for my faults. ",
            answer_3: "I blame myself for everything bad that happens. ",
            correct_answer: '',
        },
        {
            id: 9,
            question: "",
            answer_0: "I don't have any thoughts of killing myself. ",
            answer_1: "I have thoughts of killing myself, but I would not carry them out. ",
            answer_2: "I would like to kill myself.  ",
            answer_3: "I would kill myself if I had the chance. ",
            correct_answer: '',
        },
        {
            id: 10,
            question: "",
            answer_0: "I don't cry any more than usual. ",
            answer_1: "I cry more now than I used to. ",
            answer_2: "I cry all the time now. ",
            answer_3: "I used to be able to cry, but now I can't cry even though I want to. ",
            correct_answer: '',
        },
        {
            id: 11,
            question: "",
            answer_0: "I am no more irritated by things than I ever was. ",
            answer_1: "I am slightly more irritated now than usual. ",
            answer_2: "I am quite annoyed or irritated a good deal of the time. ",
            answer_3: "I feel irritated all the time. ",
            correct_answer: '',
        },
        {
            id: 12,
            question: "",
            answer_0: "I have not lost interest in other people. ",
            answer_1: "I am less interested in other people than I used to be. ",
            answer_2: "I have lost most of my interest in other people. ",
            answer_3: "I have lost all of my interest in other people. ",
            correct_answer: '',
        },
        {
            id: 13,
            question: "",
            answer_0: "I make decisions about as well as I ever could. ",
            answer_1: "I put off making decisions more than I used to. ",
            answer_2: "I have greater difficulty in making decisions more than I used to. ",
            answer_3: "I can't make decisions at all anymore. ",
            correct_answer: '',
        },
        {
            id: 14,
            question: "",
            answer_0: "I don't feel that I look any worse than I used to. ",
            answer_1: "I am worried that I am looking old or unattractive. ",
            answer_2: "I feel there are permanent changes in my appearance that make me look unattractive. ",
            answer_3: "I believe that I look ugly. ",
            correct_answer: '',
        },
        {
            id: 15,
            question: "",
            answer_0: "I can work about as well as before. ",
            answer_1: "It takes an extra effort to get started at doing something. ",
            answer_2: "I have to push myself very hard to do anything. ",
            answer_3: "I can't do any work at all. ",
            correct_answer: '',
        },
        {
            id: 16,
            question: "",
            answer_0: "I can sleep as well as usual. ",
            answer_1: "I don't sleep as well as I used to. ",
            answer_2: "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep. ",
            answer_3: "I wake up several hours earlier than I used to and cannot get back to sleep. ",
            correct_answer: '',
        },
        {
            id: 17,
            question: "",
            answer_0: "I don't get more tired than usual. ",
            answer_1: "I get tired more easily than I used to. ",
            answer_2: "I get tired from doing almost anything. ",
            answer_3: "I am too tired to do anything. ",
            correct_answer: '',
        },
        {
            id: 18,
            question: "",
            answer_0: "My appetite is no worse than usual. ",
            answer_1: "My appetite is not as good as it used to be. ",
            answer_2: "My appetite is much worse now. ",
            answer_3: "I have no appetite at all anymore. ",
            correct_answer: '',
        },
        {
            id: 19,
            question: "",
            answer_0: "I haven't lost much weight, if any, lately.   ",
            answer_1: "I have lost more than five pounds. ",
            answer_2: "I have lost more than ten pounds. ",
            answer_3: "I have lost more than fifteen pounds. ",
            correct_answer: '',
        },
        {
            id: 20,
            question: "",
            answer_0: "I am no more worried about my health than usual.   ",
            answer_1: "I am worried about physical problems like aches, pains, upset stomach, or constipation. ",
            answer_2: "I am very worried about physical problems and it's hard to think of much else. ",
            answer_3: "I am so worried about my physical problems that I cannot think of anything else. ",
            correct_answer: '',
        },
        {
            id: 21,
            question: "",
            answer_0: "I have not noticed any recent change in my interest in sex. ",
            answer_1: "I am less interested in sex than I used to be.   ",
            answer_2: "I have almost no interest in sex. ",
            answer_3: "I have lost interest in sex completely. ",
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

    const finalStatement = () => {
        let total = totalScore;
        if (total < 11) {
            return <h3>These ups and downs are considered normal </h3>
        } else if (total < 17) {
            return <h3>Mild mood disturbance </h3>
        } else if (total < 21) {
            return <h3>Borderline clinical depression </h3>
        } else if (total < 31) {
            return <h3>Moderate depression </h3>
        } else if (total < 41) {
            return <h3>Severe depression  </h3>
        } else {
            return <h3>Extreme depression </h3>
        }
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
                <ul>{finalStatement()}</ul>
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

export default QuizApp1;