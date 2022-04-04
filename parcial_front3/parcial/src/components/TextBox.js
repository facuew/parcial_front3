import React, { Component } from 'react'

export default class TextBox extends Component {

  render() {
    return (
        <div>
      <div>{this.props.data.historia}</div>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '15px'}}>
          <button onClick={() => {this.props.data.opciones.a === "FIN." ? alert("FIN."): this.props.updateParent("a", "A: " + this.props.data.opciones.a)}}>{this.props.data.opciones.a}</button>
          <button onClick={() => {this.props.data.opciones.b === "FIN." ? alert("FIN."): this.props.updateParent("b", "B: " + this.props.data.opciones.b)}}>{this.props.data.opciones.b}</button>
        
      </div>
      <div>
          <div>Ultima eleccion: {this.props.ultimaEleccion.toUpperCase()}</div>
      </div>
      <ul>
          {this.props.historial.map((ch) => {
              return <li>{ch}</li>
          })}
      </ul>

      </div>
    )
  }
}
