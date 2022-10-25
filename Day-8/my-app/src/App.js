import './App.css';
import Emoji from './Inheritance/Emoji';
import Text from './Inheritance/Text';

function App() {
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <br />
      <br />
      <Emoji>
        {
          ({addEmoji}) => <Text addEmoji={addEmoji} />
        }
      </Emoji>
    </div>
  );
}

export default App;
