import logo from './logo.svg';
import './App.css';
import MyApp from './calendar/calendar'
import { CalendarEvent } from "./calendar/calendar-events";

function App() {
  return (
    <div>
      <header>
        
        <MyApp />
        <CalendarEvent />
       
      </header>
    </div>
  );
}

export default App;
