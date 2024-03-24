import './App.css';

import {Route, Routes} from 'react-router'
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';

function App() {
  return (
  <>
  <Routes>
    <Route path='/signup' element=<SignUp></SignUp>></Route>
    <Route path='/signin' element=<SignIn></SignIn>></Route>
  </Routes>
    {/* <SignUp></SignUp> */}
  </>
  );
}

export default App;
