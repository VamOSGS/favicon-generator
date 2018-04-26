import React from 'react';
import './AppStyles.less';
import Canvas from '../Canvas';
import Form from '../Form';

const App = () => (
  <div className="App">
    <h1> Favicon generator </h1>
    <Form />
    <Canvas />
  </div>
);

export default App;
