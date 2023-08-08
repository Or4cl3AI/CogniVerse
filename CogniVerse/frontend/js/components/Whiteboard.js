import React, { Component } from 'react';

class Whiteboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whiteboardMessage: ''
        };
    }

    handleMessage = (event) => {
        this.setState({ whiteboardMessage: event.target.value });
    }

    render() {
        return (
            <div id="whiteboard">
                <h2>Virtual Whiteboard</h2>
                <textarea 
                    value={this.state.whiteboardMessage} 
                    onChange={this.handleMessage} 
                    placeholder="Write your message here..."
                />
                <button onClick={() => this.props.sendWhiteboardMessage(this.state.whiteboardMessage)}>
                    Send Message
                </button>
            </div>
        );
    }
}

export default Whiteboard;