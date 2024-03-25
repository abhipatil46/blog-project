import './App.css';

import {Route, Routes} from 'react-router'
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navabr/Navbar';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/signup' element=<SignUp></SignUp>></Route>
    <Route path='/signin' element=<SignIn></SignIn>></Route>
    <Route path='/' element=<Home></Home>></Route>
    <Route element={<PrivateRoutes/>}>
    <Route path='/dashboard' element=<Dashboard></Dashboard>></Route>
    </Route>
  </Routes>
    {/* <SignUp></SignUp> */}
  </BrowserRouter>
  );
}

export default App;
