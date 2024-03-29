import React, { useState } from 'react';
import './App.css';

import MindARThreeViewer from './mindar-three-viewer';

function App() {
  const [started, setStarted] = useState(null);
    ///const [started, setStarted] = useState("aframe");

  return (
    <div className="App">
        <div className="container">
            <MindARThreeViewer/>

        </div>
        {/*<div className="control-buttons">
            {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}

            {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
        </div>

        {started === 'aframe' && (
            <div className="container">
                <MindARViewer/>
                <video></video>
            </div>
        )}*/}



        {/*<h1>Example React component with <a href="https://github.com/hiukim/mind-ar-js" target="_blank">MindAR</a></h1>

      <div className="control-buttons">
        {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
        {started === null && <button onClick={() => {setStarted('three')}}>Start ThreeJS version</button>}
        {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
      </div>

      {started === 'aframe' && (
        <div className="container">
          <MindARViewer/>
          <video></video>
        </div>
      )}

      {started === 'three' && (
        <div className="container">
          <MindARThreeViewer />
        </div>
      )}*/}
    </div>
  );
}

export default App;
