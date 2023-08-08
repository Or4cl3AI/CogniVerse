import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        const response = await axios.get('api/quiz/questions');
        setQuestions(response.data);
    };

    const submitAnswer = answer => {
        const nextQuestion = currentQuestion + 1;
        setUserAnswers([...userAnswers, answer]);

        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizEnd(true);
            calculateScore();
        }
    };

    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((answer, index) => {
            if(answer === questions[index].correctAnswer) {
                score += 1;
            }
        });
        setScore(score);
    };

    return (
        <div id="quiz">
            {quizEnd ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion]?.question}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion]?.answers.map((answer, index) => (
                            <button onClick={() => submitAnswer(answer)} key={index}>{answer}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;