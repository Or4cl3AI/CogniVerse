import React from 'react';

class Assessments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            userAnswers: [],
            score: 0,
            assessmentComplete: false
        };
    }

    componentDidMount() {
        // Fetch the quiz from the server
        fetch('/api/quiz')
            .then(response => response.json())
            .then(data => this.setState({ quiz: data }));
    }

    handleAnswerSubmit(answer, questionId) {
        // Update userAnswers in the state
        this.setState(prevState => ({
            userAnswers: [...prevState.userAnswers, { questionId, answer }]
        }));
    }

    handleQuizSubmit() {
        // Send userAnswers to the server for evaluation
        fetch('/api/quiz/evaluate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.userAnswers),
        })
        .then(response => response.json())
        .then(data => this.setState({ score: data.score, assessmentComplete: true }));
    }

    render() {
        return (
            <div id="assessment">
                {this.state.quiz.map((question, index) => (
                    <div key={index}>
                        <p>{question.text}</p>
                        {question.answers.map((answer, index) => (
                            <button key={index} onClick={() => this.handleAnswerSubmit(answer, question.id)}>
                                {answer.text}
                            </button>
                        ))}
                    </div>
                ))}
                <button onClick={this.handleQuizSubmit}>Submit Quiz</button>
                {this.state.assessmentComplete && <p>Your score: {this.state.score}</p>}
            </div>
        );
    }
}

export default Assessments;