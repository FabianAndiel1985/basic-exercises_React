import React,{ Component } from 'react';
import logo from './logo.svg';
import ClickHeader from './components/click-header';
import './App.css';

class App extends Component {

     constructor(props) {
      super(props);
      this.state = {
        amountOfClicks:0
      }
      this.saySmth = this.saySmth.bind(this);
    }

    saySmth() {
        this.setState({
          amountOfClicks: this.state.amountOfClicks+1})
        }
      
    render() { 
      return(
        <section>
          <ClickHeader> </ClickHeader>
          <h1> Amount of clicks: {this.state.amountOfClicks} </h1>
          <button onClick={this.saySmth}>Click me</button>
        </section>
      );
    }
}


export default App;
