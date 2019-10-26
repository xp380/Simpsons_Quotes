// src/App.js
import React, { Component } from "react";

import  GenerateQuote  from  './components/GenerateQuote';
import  DisplayQuote  from  './components/DisplayQuote';

import "./App.css";

const sampleQuote= 
  {
    quote: "Me fail English? That's unpossible",
    character: "Ralph Wiggum",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  }

class App extends Component {
  state = {
    working: true,
    quote: sampleQuote
  }

  getQuote= () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res =>  res.json())
      .then(data => {
        console.log(data[0])
        this.setState({
          quote: data[0]
        })
      })
  }

  handleToggleWorkingState = () => {
    let prevWorkingState = this.state.working
    this.setState({
      working: !prevWorkingState
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.handleToggleWorkingState}>
          <img className={this.state.working ? "App-logo" : "App-logo App-logo--spin"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Simpsons_Logo.svg/1280px-The_Simpsons_Logo.svg.png"  alt="logo" />
        </header>
        <div>
          <GenerateQuote selectQuote={() =>  this.getQuote()} />
          <DisplayQuote quote={this.state.quote}/>
        </div>
      </div>
    );
  }

}

export default App;

