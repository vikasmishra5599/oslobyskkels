import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Stations from './components/Stations';

function App() {
  return (
      <>
        <Header />
        <main className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Switch>
            <Route component={Stations}/>
          </Switch>
        </main>
      </>
  );
}

export default App;
