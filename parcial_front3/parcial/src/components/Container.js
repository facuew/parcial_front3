import React, { Component } from "react";
import data from "../data/data.json";
import TextBox from "./TextBox";

export default class Container extends Component {
  constructor() {
    super();
    this.state = { choices: [], index: 1, lastChoice: "", current: data[0]};
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(letter, historia) {
    this.setState((prevState, props) => ({
        index: prevState.index + 1,
        lastChoice: letter,
        choices: [...prevState.choices, historia]
    }))
  }

  componentDidMount(){
      console.log(this.state)
  }



  render() {
    return (
        <div style={{width: '600px'}}>
        <TextBox data={data.find((o) => o.id === this.state.index + this.state.lastChoice)} updateParent={this.handleButton} ultimaEleccion={this.state.lastChoice} historial={this.state.choices}/>
        </div>
    );
  }
}
