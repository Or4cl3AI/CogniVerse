import React from 'react';
import Chat from './Chat';
import VideoConference from './VideoConference';
import Whiteboard from './Whiteboard';

class Collaboration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatMessages: [],
            videoConferenceParticipants: [],
            whiteboardDrawings: []
        };
    }

    handleMessage = (message) => {
        this.setState(prevState => ({
            chatMessages: [...prevState.chatMessages, message]
        }));
    }

    handleVideoConference = (participant) => {
        this.setState(prevState => ({
            videoConferenceParticipants: [...prevState.videoConferenceParticipants, participant]
        }));
    }

    handleWhiteboard = (drawing) => {
        this.setState(prevState => ({
            whiteboardDrawings: [...prevState.whiteboardDrawings, drawing]
        }));
    }

    render() {
        return (
            <div id="collaboration">
                <Chat messages={this.state.chatMessages} onMessage={this.handleMessage} />
                <VideoConference participants={this.state.videoConferenceParticipants} onParticipant={this.handleVideoConference} />
                <Whiteboard drawings={this.state.whiteboardDrawings} onDrawing={this.handleWhiteboard} />
            </div>
        );
    }
}

export default Collaboration;