import React from 'react';

class ContinuousLearning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            learningData: [],
        };
    }

    componentDidMount() {
        this.fetchLearningData();
    }

    fetchLearningData() {
        // Fetch learning data from the backend
        // This is a placeholder and should be replaced with actual fetch request
        const data = [
            { id: 1, topic: 'Mathematics', progress: '80%' },
            { id: 2, topic: 'Physics', progress: '60%' },
            { id: 3, topic: 'Chemistry', progress: '70%' },
        ];

        this.setState({ learningData: data });
    }

    render() {
        return (
            <div id="continuousLearning">
                <h2>Continuous Learning Analytics</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.learningData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.topic}</td>
                                <td>{data.progress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContinuousLearning;