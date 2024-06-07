import React, { useState, useEffect } from 'react';
import './App.css';
import Box from './components/Box';
import Header from './components/Header';
import About from './components/About';
import CrocoContent from './components/CrocoContent';
import BounzeContent from './components/BounzeContent';
import RatContent from './components/RatContent';

function App() {
  const [about, setAbout] = useState(false);
  const [crocoDale, setCrocodale] = useState(false);
  const [bounze, setBounze] = useState(false);
  const [rat, setRat] = useState(false);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleAbout = () => {
    setAbout(true);
  };

  const handleGames = () => {
    setAbout(false);
  };

  const handleCrocoDale = () => {
    setCrocodale(true);
  };

  const handleBounze = () => {
    setBounze(true);
  };
  const handleRat = () => {
    setRat(true);
  };



  const handleClose = () => {
    setCrocodale(false);
    setBounze(false);
    setRat(false);
  };

  useEffect(() => {
    const images = ["/bounze.png", "/bounze_screenshot_1.png", "/bounze_screenshot_2.png"];
    const loadedImages = [];

    images.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        loadedImages.push(image);
        if (loadedImages.length === images.length) {
          setImagesLoaded(true);
        }
      };
      img.src = image;
    });
  }, []);
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
            {crocoDale && (
              <CrocoContent handleClose={handleClose} />)}
            {bounze && (
              <BounzeContent handleClose={handleClose} />)}
            {rat && (
              <RatContent handleClose={handleClose} />)}
            <h2>Games</h2>
            <section className='games'>

              <Box onClick={handleCrocoDale} imageUrl={"/croco.png"} overflowHeader={"CrocoDale"} overflowText={"Autoscrolling Platformer"} size={200} ></Box>
              <Box onClick={handleBounze} imageUrl={"/bounze.png"} overflowHeader={"BounZe"} overflowText={"Ominous Puzzle Game"} size={200}></Box>
              <Box onClick={handleRat} imageUrl={"/rat.png"} overflowHeader={"Unannounced Rat Game"} overflowText={"Coming Soon™"} size={200}></Box>
            </section>
            <h2>Jam Games</h2>

            <section className='games'>
            <a href='https://ldjam.com/events/ludum-dare/55/sokobane-descend' target="_blank" rel="noopener noreferrer">
                <Box imageUrl={"/sokobane.png"} overflowHeader={""} overflowText={"Summoning Trials in the Depths of Sokobane!"} size={150}></Box>
              </a>
              <a href='https://pasbugi.itch.io/ninja-fruit' target="_blank" rel="noopener noreferrer">
                <Box imageUrl={"/fruit.png"} overflowHeader={""} overflowText={"Save 'n Slice the Fruits!"} size={150}></Box>
              </a>
              <a href='https://ldjam.com/events/ludum-dare/42/burnout' target="_blank" rel="noopener noreferrer">
                <Box imageUrl={"/burnout.jpg"} overflowHeader={""} overflowText={"Escape Work!"} size={150}></Box>
              </a>
              <a href='https://ldjam.com/events/ludum-dare/46/bonfire' target="_blank" rel="noopener noreferrer">
                <Box imageUrl={"/bonfire.jpg"} overflowHeader={""} overflowText={"Hunt Monsters and Stoke the Fire!"} size={150}></Box>
              </a>
              <a href='https://ldjam.com/events/ludum-dare/44/crypt-descend' target="_blank" rel="noopener noreferrer">
                <Box imageUrl={"/crypt.jpg"} overflowHeader={""} overflowText={"Descend the Crypt.."} size={150}></Box>
              </a>
            </section>
          </div>}
      </header>

    </div>
  );
}

export default App;
