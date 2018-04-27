import React from 'react';
import Loader from 'react-loader-spinner';
import './LoaderStyles.less';

const Preloader = ({ loaded }) => (
  <div className={`Loader ${loaded ? 'loaded' : 'loading'}`}>
    <Loader type="TailSpin" color="#0078D7" height="100" width="100" />
  </div>
);

export default Preloader;
