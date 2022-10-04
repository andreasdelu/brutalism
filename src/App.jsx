
import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import LoadSphere from './components/LoadSphere';
import { ABSTRACTSEQ, REALITYSEQ } from "./assets/images/sequenceloader";

function App() {

  const [loading, setLoading] = useState(true)
  const [percent, setPercent] = useState(0)


  return (
    <div className="App">
      <div className="bg-h"></div>
      <div className="bg-v"></div>
      <Canvas seq={ABSTRACTSEQ} />
      <Canvas seq={REALITYSEQ} />
      <h1>inhumanity /ɪnhjʊˈmanɪti/</h1>
      <p style={{textAlign: "right"}}>
        extremely cruel and brutal behaviour.
        "man's inhumanity to man"
      </p>
      <p style={{textAlign: "center", marginTop: "3rem"}}>
      Man's inhumanity to man,
      knows no country, religion, or race <br /> <br />

      Man’s inhumanity to man,
        the one shame that all time can’t erase <br /> <br />

      Man’s inhumanity to man,
        as constant as the spring driven rain <br /> <br />

      Man’s inhumanity to man,
      —rising over and over again
      </p>

      {loading &&
        <LoadSphere percent={percent} />
      }
    </div>
  );
}

export default App;
