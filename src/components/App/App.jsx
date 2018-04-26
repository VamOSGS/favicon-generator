import React from 'react';
import './AppStyles.less';
import Canvas from '../Canvas';
import Form from '../Form';

const App = () => (
  <div className="App">
    Favicon generator
    <Form />
    <Canvas />
  </div>
);

export default App;
