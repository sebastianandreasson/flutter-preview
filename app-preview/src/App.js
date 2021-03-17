import frame from './frame.svg'

function App() {
  return (
    <div className="App">
      <div className="phone">
        <div className="phone-inner">
          <iframe src="/flutter-preview/app/#/"></iframe>
        </div>
        <img src={frame}></img>
      </div>
    </div>
  );
}

export default App;
