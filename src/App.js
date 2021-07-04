import './App.scss';
import './helper/Global';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import StoreProvider, { GeneralStore } from './stores';
import {  useObserver } from "mobx-react";

import Home from './pages/Home';
import Topbar from './components/Topbar';
function App() {

  

    useEffect(() => {
     
      GeneralStore.initialConfig()
    }, [])
  return useObserver(()=>
    <div className="App">
     {GeneralStore.loading &&  <StoreProvider>
        <Router>
        <Topbar/>
          <Switch>
            <Route  path="/Apps" component={Home} />
          </Switch>
          {GeneralStore.redirect !== null && <Redirect to={GeneralStore.redirect}/>}
        </Router>
      </StoreProvider>}
    </div> 
  );
}

export default App;
