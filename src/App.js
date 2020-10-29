import './App.css';
import { data } from './components/data';
import { services } from './services/user.services'

function App() {
  return (
    <div className="App">
      {/* {console.log(data, "data")} */}
      {services.transform()}
    </div>
  );
}



export default App;