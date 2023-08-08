import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const socket = io.connect('http://localhost:5000');

    useEffect(() => {
        socket.on('chatMessage', ({ message }) => {
            setChat([...chat, message]);
        });
    });

    const onTextChange = e => {
        setMessage(e.target.value);
    };

    const onMessageSubmit = e => {
        e.preventDefault();
        socket.emit('chatMessage', { message });
        setMessage('');
    };

    const renderChat = () => {
        return chat.map((message, index) => (
            <div key={index}>
                <h3>{message}</h3>
            </div>
        ));
    };

    return (
        <div className="chatBox">
            <form onSubmit={onMessageSubmit}>
                <h1>Chat</h1>
                <div className="name-field">
                    <input
                        name="message"
                        onChange={e => onTextChange(e)}
                        value={message}
                        label="Message"
                        style={{ width: '98%' }}
                    />
                </div>
                <button>Send Message</button>
            </form>
            <div className="render-chat">
                <h1>Chat Log</h1>
                {renderChat()}
            </div>
        </div>
    );
};

export default Chat;