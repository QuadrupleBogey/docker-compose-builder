import React from 'react';

import Header from './containers/header';
import ICannotThinkOfAName from './containers/ICannotThinkOfAName';

import './App.css';

function App() {

  const version = [3.0, 3.8]

  const [versionIndex, setVersion] = React.useState(0);

  console.log(versionIndex);

  return (
    <div className="App">
      <Header version={version} handleChange={setVersion} index={versionIndex} />
      <ICannotThinkOfAName />
    </div>
  );
}

export default App;
