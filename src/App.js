import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";

const message = 'Hello world!';

function App() {
  return (
   <Message message={message}/>
  );
}

export default App;
