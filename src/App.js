import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Head from './Pages/Transactions'
import Holdings from './Pages/Holdings';
import Main from './Pages/Main';

function App() {
  return (
   
      <Switch>
           
            <Route path="/Transactions" component={Head} />
            <Route path="/Holdings" component={Holdings} /> 
            <Route path="/" exact component={Main} />
    
      </Switch>

  );
}

export default App;
