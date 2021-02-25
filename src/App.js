import Chatbot from 'react-chatbot-kit';
import './App.css';

import ActionProvider from './Actionprovider';
import MessageParser from './MessageParser';
import config from './Config'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
