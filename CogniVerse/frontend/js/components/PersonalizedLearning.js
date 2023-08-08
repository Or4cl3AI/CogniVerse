import React from 'react';
import { startLearningJourney } from '../../machine_learning/TensorFlow.py';

class PersonalizedLearning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            learningJourney: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchLearningJourney();
    }

    fetchLearningJourney() {
        startLearningJourney(this.props.userId)
            .then(learningJourney => {
                this.setState({
                    learningJourney: learningJourney,
                    isLoading: false,
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        const { learningJourney, isLoading } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div id="personalizedLearning">
                <h2>Your Personalized Learning Journey</h2>
                {learningJourney.map((journey, index) => (
                    <div key={index}>
                        <h3>{journey.title}</h3>
                        <p>{journey.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonalizedLearning;