```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Chat from './components/Chat';
import VideoConference from './components/VideoConference';
import Whiteboard from './components/Whiteboard';
import Quiz from './components/Quiz';
import Analytics from './components/Analytics';
import Security from './components/Security';
import ARVR from './components/ARVR';
import LearningJourney from './components/LearningJourney';
import Assessments from './components/Assessments';
import PersonalizedLearning from './components/PersonalizedLearning';
import ImmersiveExperience from './components/ImmersiveExperience';
import Collaboration from './components/Collaboration';
import ContinuousLearning from './components/ContinuousLearning';

function renderComponent(component, domElementId) {
    ReactDOM.render(
        <React.StrictMode>
            {component}
        </React.StrictMode>,
        document.getElementById(domElementId)
    );
}

function handleMessage(messageName, messageHandler) {
    window.addEventListener(messageName, messageHandler);
}

// Render components
renderComponent(<App />, 'app');
renderComponent(<Chat />, 'chatBox');
renderComponent(<VideoConference />, 'videoConference');
renderComponent(<Whiteboard />, 'whiteboard');
renderComponent(<Quiz />, 'quiz');
renderComponent(<Analytics />, 'analytics');
renderComponent(<Security />, 'security');
renderComponent(<ARVR />, 'arvr');
renderComponent(<LearningJourney />, 'learningJourney');
renderComponent(<Assessments />, 'assessment');
renderComponent(<PersonalizedLearning />, 'personalizedLearning');
renderComponent(<ImmersiveExperience />, 'immersiveExperience');
renderComponent(<Collaboration />, 'collaboration');
renderComponent(<ContinuousLearning />, 'continuousLearning');

// Handle messages
handleMessage('chatMessage', Chat.handleMessage);
handleMessage('videoConferenceMessage', VideoConference.handleMessage);
handleMessage('whiteboardMessage', Whiteboard.handleMessage);
```