import React from 'react';

class VideoConference extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoConferenceMessage: ''
        };
    }

    handleMessage(event) {
        this.setState({videoConferenceMessage: event.target.value});
    }

    render() {
        return (
            <div id="videoConference">
                <h2>Video Conference</h2>
                <video id="localVideo" autoPlay muted></video>
                <video id="remoteVideo" autoPlay></video>
                <div>
                    <input type="text" value={this.state.videoConferenceMessage} onChange={this.handleMessage.bind(this)} placeholder="Type a message..." />
                    <button onClick={() => this.props.sendMessage('videoConferenceMessage', this.state.videoConferenceMessage)}>Send</button>
                </div>
            </div>
        );
    }
}

export default VideoConference;