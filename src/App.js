
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Navigation/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
       <ToastContainer />
    <Router>
        <Routing /> 
    </Router>
      
    </div>
  );
}

export default App;
