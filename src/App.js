import './App.css';
import Box from './components/Box';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='borders'>
          <div className='left'>
            <pre>Лорем ипсум долор сит амет, пер цлита поссит ех, ат мунере фабулас петентиум сит. </pre>
          </div>
          <div className='right'>
            <pre>旅ロ京青利セムレ弱改フヨス波府かばぼ意送でぼ調掲察たス日西重ケアナ住橋ユムミク順待ふかんぼ人奨貯鏡すびそ</pre>
          </div>
        </div>
        <Header></Header>
        <h2>Mobile Games</h2>
        <div className='games'>

          <Box imageUrl={"/croco.png"} overflowHeader={"CrocoDale"} overflowText={"Autoscrolling Platformer"} link={"https://play.google.com/store/apps/details?id=com.PapriGames.CrocoDale"}></Box>
          <Box imageUrl={"/bounze.png"} overflowHeader={"BounZe"} overflowText={"Ominous Puzzle Game"}></Box>
        </div>
        <h2>Jam Games</h2>

        <div className='games'>
          <Box imageUrl={"/fruit.png"} overflowHeader={""} overflowText={"Save/Slice the fruits!"} link={"https://pasbugi.itch.io/ninja-fruit"} size={150}></Box>
          <Box imageUrl={"/burnout.jpg"} overflowHeader={""} overflowText={"Escape Work!"} link={"https://pasbugi.itch.io/ninja-fruit"} size={150}></Box>
          <Box imageUrl={"/bonfire.jpg"} overflowHeader={""} overflowText={"Hunt Monsters and Stoke the Fire"} link={"https://ldjam.com/events/ludum-dare/46/bonfire"} size={150}></Box>
          <Box imageUrl={"/crypt.jpg"} overflowHeader={""} overflowText={"Descend the Crypt"} link={"https://ldjam.com/events/ludum-dare/44/crypt-descend"} size={150}></Box>
        </div>


      </header>

    </div>
  );
}

export default App;
