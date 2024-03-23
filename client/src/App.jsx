import './App.css';

import {Route, Routes} from 'react-router'
import SignUp from './components/signUp/SignUp';

function App() {
  return (
  <>
  <Routes>
    <Route path='/signup' element=<SignUp></SignUp>></Route>
  </Routes>
    {/* <SignUp></SignUp> */}
  </>
  );
}

export default App;
