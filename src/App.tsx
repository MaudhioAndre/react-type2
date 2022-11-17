import './App.css';

import React from 'react';
import Fungsi from './components/Fungsi';
import Arai from './components/Arai';
import Prop from './components/Prop';
import ParentFC from './components/ParentFC';
import ChildFC from './components/ChildFC';

const logo: string = require("./logo.svg").default;

function App() {
  
  return (
    <div className="App">
      <br/>
      <Fungsi />
      <br/>
      <br/>
      <hr/>
      <br/>
      <Arai/>
      <br/>
      <br/>
      <hr/>
      <br/>
      <Prop gaWajib={true} title='test' user={{nama : 'dhio', umur : 18}} />
      <br/>
      <br/>
      <hr/>
      <br/>
      <ParentFC>
        <ChildFC />
      </ParentFC>
      <br/>
      <br/>
      <hr/>
      <br/>
    </div>
  );
}

export default App;
