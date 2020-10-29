import './App.css';
import { users } from './components/data'
import { topics } from './components/data'
import { transformedData } from './components/data'

function App() {
  return (
    <div className="App">
      {console.log(users, "users array")}
      {console.log(topics, "topics array")}
      {console.log(transformedData, "transformedData array")}
    </div>
  );
}

export default App;