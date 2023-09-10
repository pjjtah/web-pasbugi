import './App.css';
import Box from './components/Box';

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

        <div className='games'>

          <Box imageUrl={"/croco.png"} overflowHeader={"CrocoDale"} overflowText={"Autoscrolling Platformer"} link={"https://play.google.com/store/apps/details?id=com.PapriGames.CrocoDale"}></Box>
          <Box imageUrl={"/bounze.png"} overflowHeader={"BounZe"} overflowText={"Ominous Puzzle Game"}></Box>
        </div>
        <div className='games'>
          <Box imageUrl={"/fruit.png"} overflowHeader={"Ninja Fruit"} overflowText={"Save/Slice the fruits!"} size={150}></Box>
        </div>


      </header>

    </div>
  );
}

export default App;
