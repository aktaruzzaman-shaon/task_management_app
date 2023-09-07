import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import LoginSignUp from './Component/LoginSignUp/LoginSignUp';

function App() {

  return (
    <div className="App">
      <LoginSignUp></LoginSignUp>
      <Routes>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
