import React, { Component } from 'react';
import './App.css';

const PATH = "http://ip-api.com/json/";
const FLAG_PATH = "images/";
const FLAG_EXT = ".png";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ipAddr: "",
      country: "",
      flag: `${FLAG_PATH}placeholder${FLAG_EXT}`
    };
    
  }
  
  componentDidMount() {
    this.fetchIPInfo();
  }
  
  fetchIPInfo() {
    fetch(PATH)
    .then(response => response.json())
    .then(result => this.setIPInfo(result))
    .catch(e => console.log(e));
  }
  
  setIPInfo(result) {
    this.setState({
      ipAddr: result.query,
      country: result.country,
      flag: `${FLAG_PATH}${result.countryCode}${FLAG_EXT}`
    });
  }
  
  render() {
    const {ipAddr, country, flag} = this.state;
    return (
      <div>
        <h1>{ipAddr}</h1>
        <h1 id="country"><img src={flag} width="21" alt=" "/>&nbsp;{country}</h1>
      </div>
    );
  }
}

export default App;