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
        
const QuizApp2 = () => {
    const questions = [
        {
            id: 1,
            question: 'Anxious mood: Woories, anticipation of the worst, fearful anticipation, irritability',
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 2,
            question: 'Tension: Feeling of tension, fatability, startle response, moved to tears easily, trembling, feelings of restlessness, inability to relax',
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 3,
            question: 'Fear: Of dark, of strangers, of being left alone, of animals, of traffuc, of crowds',
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 4,
            question: 'Insomnia: Difficulty in falling asleep, broken sleep, unstatisfying sleep and fatigue on waking, dreams, nightmares, night terrors',
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 5,
            question: 'Intellectual: Difficulty concentration, poor memory',
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 6,
            question: "Depressed Mood: Loss of intrest, lack of pleasure in lobbies, depression, early waking, diurnal swing",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },

        {
            id: 7,
            question: "Somatic (Muscular): Pains and aches, twiching, stiffness, myoclonic jerks, grinding of teeth, unsteady voice, increased muscular tone",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 8,
            question: "Somatic (Sensory): Tinnitus, blurring of vision, hot and cold flushes, feelings of weakness, pricking sensation",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 9,
            question: "Cardovasculas Symptoms: Tachycardia, palpitations, pain in chest, throbbing of vessels, fainting feelings, missing beat",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 10,
            question: "Respiratory Symptoms: Pressure or constriction in chest, choking feelings, sighing, dyspnea",
            
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",correct_answer: '',
        },
        {
            id: 11,
            question: "Gastrointestinal Symptoms: Difficulty in swallowing, wind abdominal pain, burning sensations, abdominal fullness, nausea, vomiting, borborygmi, looseness of bowels, loss of weight, constipation",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 12,
            question: "Genitourinary Symptoms: Frequency of micturition, urgency of micturition, amenorrhea, menorrhagia, development of frigidity, premature ejaculation, loss of libido, impotence",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 13,
            question: "Autonomic Symptoms: Dry mouth, flushing, pallor, tendency to sweat, giddiness, tension headache, raising of hair.",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
            correct_answer: '',
        },
        {
            id: 14,
            question: "Behavior at Interview: Fidgeting, restlessness or pacing, tremor of hands, furrowed brow, strained face, sighing or rapid respiration, facial pallor, swallowing, etc.",
            answer_0: "0 Points",
            answer_1: "1 Points",
            answer_2: "2 Points",
            answer_3: "3 Points",
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

    const finalStatement = () => {
        let total = totalScore;
        if (total < 5) {
            return <h3>Not Present </h3>
        } else if (total < 17) {
            return <h3>Mild severity </h3>
        } else if (total < 25) {
            return <h3>Mild to Moderate severity </h3>
        } else if (total < 31) {
            return <h3>Moderate to severe </h3>
        } else {
            return <h3>Severe to Extreme </h3>
        }
    }

    if (showResults) {
        return (
            <div className="container results">
                <h2>Anxiety Results</h2>
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

export default QuizApp2;
