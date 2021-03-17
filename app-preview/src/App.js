import frame from './frame.svg'

function App() {
  return (
    <div className="App">
      <div className="phone">
        <div className="phone-inner">
          <iframe title="App preview" src={`${process.env.PUBLIC_URL}/app`}></iframe>
        </div>
        <img alt="Phone frame" src={frame}></img>
      </div>
    </div>
  );
}

export default App;
