import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from '../src/Register';
import Fan from './component/fan';
import Talent from './component/talent';
import SignInOutContainer from './container';

function App() {
  return (
    <div className="App">
      <SignInOutContainer />
    </div>
  );
}

export default App;
