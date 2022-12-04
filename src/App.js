import "./App.css";
import logo from "./party.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Invescore Happy Hour */}
        <a href="https://www.vectorstock.com/royalty-free-vector/lightning-bolt-set-neon-signs-design-template-vector-43755560"></a>
        <p>
          <a href="https://giphy.com/gifs/neon-dark-sphere-MBfLHGvyyeQgH8UknX"></a>
        </p>
      </header>
      <div className="container mx-auto columns-2">
        <div>
          <img className="max-w-full" src={logo} alt="" />
        </div>
        <div className="h-96">
          {/* <p className="m-auto my-5">You are invited to the</p> */}
          <p id="party" className="text-2xl">
            Neon Party!!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
