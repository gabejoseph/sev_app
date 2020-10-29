import './App.css';
import { data } from './components/data';
import { services } from './services/user.services'

function App() {
  return (
    <div className="App">
      {console.log(data, "data")}
      {console.log(services, "services")}
    </div>
  );
}

export default App;