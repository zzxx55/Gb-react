import "./App.css";
import Message from "./components/Message/Message";
import MessageList from "./components/MassageList/MessageList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, eaque." />
        <MessageList />
      </header>
    </div>
  );
}

export default App;
