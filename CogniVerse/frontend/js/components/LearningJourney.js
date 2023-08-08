import React from 'react';

class LearningJourney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            journey: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        this.startLearningJourney();
    }

    startLearningJourney() {
        fetch('/api/learning-journey')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ journey: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { journey, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div id="learningJourney">
                <h2>Your Learning Journey</h2>
                {journey.map((step, index) => (
                    <div key={index}>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default LearningJourney;