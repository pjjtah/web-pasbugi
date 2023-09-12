import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [about, setAbout] = useState(false);

  const handleAbout = () => {
    setAbout(true);
  };

  const handleGames = () => {
    setAbout(false);
  };

  return (
    <div className="App">
        <div className='borders'>
          <div className='left'>
            <pre>Лорем ипсум долор сит амет, пер цлита поссит ех, ат мунере фабулас петентиум сит. </pre>
          </div>
          <div className='right'>
            <pre>旅ロ京青利セムレ弱改フヨス波府かばぼ意送でぼ調掲察たス日西重ケアナ住橋ユムミク順待ふかんぼ人奨貯鏡すびそ</pre>
          </div>
        </div>
      <header className="App-header">

        <Header handleAbout={handleAbout} handleGames={handleGames}></Header>
        {about ?
          <About></About>
          : <div>
            <h2>Games</h2>
            <section className='games'>

              <Box imageUrl={"/croco.png"} overflowHeader={"CrocoDale"} overflowText={"Autoscrolling Platformer"} link={"https://play.google.com/store/apps/details?id=com.PapriGames.CrocoDale"} size={200}></Box>
              <Box imageUrl={"/bounze.png"} overflowHeader={"BounZe"} overflowText={"Ominous Puzzle Game"} size={200}></Box>
              <Box imageUrl={"/rat.png"} overflowHeader={"Unannounced Rat Game"} overflowText={"Coming Soon™"} size={200}></Box>
            </section>
            <h2>Jam Games</h2>

            <section className='games'>
              <Box imageUrl={"/fruit.png"} overflowHeader={""} overflowText={"Save/Slice the fruits!"} link={"https://pasbugi.itch.io/ninja-fruit"} size={150}></Box>
              <Box imageUrl={"/burnout.jpg"} overflowHeader={""} overflowText={"Escape Work!"} link={"https://ldjam.com/events/ludum-dare/42/burnout"} size={150}></Box>
              <Box imageUrl={"/bonfire.jpg"} overflowHeader={""} overflowText={"Hunt Monsters and Stoke the Fire"} link={"https://ldjam.com/events/ludum-dare/46/bonfire" } size={150}></Box>
              <Box imageUrl={"/crypt.jpg"} overflowHeader={""} overflowText={"Descend the Crypt"} link={"https://ldjam.com/events/ludum-dare/44/crypt-descend"} size={150}></Box>
            </section>
          </div>}
      </header>

    </div>
  );
}

export default App;
