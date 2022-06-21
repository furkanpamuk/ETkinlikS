import './App.css';
import { EventsProvider } from './context/events';
import Router from './router/Router';

function App() {
  return (
    <EventsProvider>
      <Router></Router>
    </EventsProvider>
  );
}

export default App;
