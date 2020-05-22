import React from 'react';

import Header from './containers/header';
import Body from './containers/body';

import './App.css';

function App() {

  const version = [3.0, 3.8]

  const [versionIndex, setVersion] = React.useState(0);

  console.log(versionIndex);

  return (
    <div className="App">
      <Header version={version} handleChange={setVersion} index={versionIndex} />
      <Body version={version[versionIndex]} />
    </div>
  );
}

export default App;
