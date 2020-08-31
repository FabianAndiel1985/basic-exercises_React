import React, {Component} from 'react';
import Panel from './components/Panel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<Panel title="ich bin die erste Überschrift">
      	<p> Ich bin der erste Text</p>
      	</Panel>
      	<Panel title="ich bin die zweite Überschrift">
      	<p> Ich bin der zweite Text</p></Panel>
      </div>
      
    );
  }
}
export default App;