```javascript
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import Chat from '../components/Chat';
import VideoConference from '../components/VideoConference';
import Whiteboard from '../components/Whiteboard';
import Quiz from '../components/Quiz';
import Analytics from '../components/Analytics';
import Security from '../components/Security';
import ARVR from '../components/ARVR';
import LearningJourney from '../components/LearningJourney';
import Assessments from '../components/Assessments';
import PersonalizedLearning from '../components/PersonalizedLearning';
import ImmersiveExperience from '../components/ImmersiveExperience';
import Collaboration from '../components/Collaboration';
import ContinuousLearning from '../components/ContinuousLearning';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/CogniVerse: The Knowledge Odyssey/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Chat component', () => {
  render(<Chat />);
  const chatElement = screen.getByTestId('chatBox');
  expect(chatElement).toBeInTheDocument();
});

test('renders VideoConference component', () => {
  render(<VideoConference />);
  const videoElement = screen.getByTestId('videoConference');
  expect(videoElement).toBeInTheDocument();
});

test('renders Whiteboard component', () => {
  render(<Whiteboard />);
  const whiteboardElement = screen.getByTestId('whiteboard');
  expect(whiteboardElement).toBeInTheDocument();
});

test('renders Quiz component', () => {
  render(<Quiz />);
  const quizElement = screen.getByTestId('quiz');
  expect(quizElement).toBeInTheDocument();
});

test('renders Analytics component', () => {
  render(<Analytics />);
  const analyticsElement = screen.getByTestId('analytics');
  expect(analyticsElement).toBeInTheDocument();
});

test('renders Security component', () => {
  render(<Security />);
  const securityElement = screen.getByTestId('security');
  expect(securityElement).toBeInTheDocument();
});

test('renders ARVR component', () => {
  render(<ARVR />);
  const arvrElement = screen.getByTestId('arvr');
  expect(arvrElement).toBeInTheDocument();
});

test('renders LearningJourney component', () => {
  render(<LearningJourney />);
  const journeyElement = screen.getByTestId('learningJourney');
  expect(journeyElement).toBeInTheDocument();
});

test('renders Assessments component', () => {
  render(<Assessments />);
  const assessmentElement = screen.getByTestId('assessment');
  expect(assessmentElement).toBeInTheDocument();
});

test('renders PersonalizedLearning component', () => {
  render(<PersonalizedLearning />);
  const learningElement = screen.getByTestId('personalizedLearning');
  expect(learningElement).toBeInTheDocument();
});

test('renders ImmersiveExperience component', () => {
  render(<ImmersiveExperience />);
  const immersiveElement = screen.getByTestId('immersiveExperience');
  expect(immersiveElement).toBeInTheDocument();
});

test('renders Collaboration component', () => {
  render(<Collaboration />);
  const collaborationElement = screen.getByTestId('collaboration');
  expect(collaborationElement).toBeInTheDocument();
});

test('renders ContinuousLearning component', () => {
  render(<ContinuousLearning />);
  const continuousElement = screen.getByTestId('continuousLearning');
  expect(continuousElement).toBeInTheDocument();
});
```