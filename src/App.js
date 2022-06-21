import './App.css';
import { EventsProvider } from './context/events';
import { Router } from 'react-router-dom';

function App() {
  return (
    <EventsProvider>
      <Router></Router>
    </EventsProvider>
  );
}

export default App;
