import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {

  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
