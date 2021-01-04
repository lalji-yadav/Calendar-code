import logo from './logo.svg';
import './App.css';
import MyApp from './calendar/calendar'
import { Home } from "./calendar/Home";

function App() {
  return (
    <div>
      <header>
        
        <MyApp />
        <Home />
       
      </header>
    </div>
  );
}

export default App;
