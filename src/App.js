import React , {Component} from 'react';
import Header from './components/Header';
import DigitarNome from './components/DigitarNome';
import MostrarNome from './components/MostrarNome';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        message: 'Digite seu nome...'
    }
}

handlerChange = (e) => {
    let message = (e.target.value === '') ? 'Digite seu nome...' : 'Olá, ' + e.target.value;
    this.setState({...this.state, message: message });
}

render() {
  return (
    <div className="App">
        <Header/>
        <DigitarNome/>
        <input type="text" onChange={this.handlerChange}/>
        <MostrarNome message={this.state.message}/>
    </div>
  );
}
}

export default App;
