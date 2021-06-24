import '../Styles/App.css';
// import Form from './Form/Form';
import "../Styles/App.css";
import Main from "../Components/Main";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Main />
        {/* <Form /> */}
      </div>
    </Router>
  );
}

export default App;
