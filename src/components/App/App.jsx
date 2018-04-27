import React from 'react';
import './AppStyles.less';
import Canvas from '../Canvas';
import Form from '../Form';
import Loader from '../Loader';

const App = () => (
  <div className="App">
    <Loader />
    <h1>Favicon generator</h1>
    <Canvas />
    <Form />
  </div>
);

export default App;
