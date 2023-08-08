import React from 'react';

class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // Fetch data from the backend
        fetch('/api/analytics')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        const { data } = this.state;

        return (
            <div id="analytics">
                <h2>Learning Analytics</h2>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Learning Journey</th>
                            <th>Progress</th>
                            <th>Assessment Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.user}</td>
                                <td>{item.learningJourney}</td>
                                <td>{item.progress}</td>
                                <td>{item.assessmentScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Analytics;