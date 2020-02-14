import React, { Component } from 'react';
import './App.css';

const PATH = "https://tools.keycdn.com/geo.json";
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
    
    this.setIPInfo = this.setIPInfo.bind(this);
    this.fetchIPInfo = this.fetchIPInfo.bind(this);
  }
  
  componentDidMount() {
    this.fetchIPInfo();
  }
  
  fetchIPInfo() {
    fetch(PATH)
    .then(response => response.json())
    .then(result => this.setIPInfo(result.data.geo))
    .catch(e => console.log(e));
  }
  
  setIPInfo(geo) {
    console.log(geo);
    this.setState({
      ipAddr: geo.ip,
      country: geo.country_name,
      flag: `${FLAG_PATH}${geo.country_code}${FLAG_EXT}`
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