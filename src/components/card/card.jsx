import { Component } from "react";
import './card.css';

// ----------------------------------------------------------

// 1) Props com Componentes de Classe
class Card extends Component{
  render(){
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>Esse é um texto do card</p>
      </div>
    )
  }
}

// ----------------------------------------------------------

// 2) Props com Componentes de Função

/*const CardFunction = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>Esse é um texto do card</p>
    </div>
  )
}*/

// ----------------------------------------------------------

// 3) Variação com Componente de Função -> Omitindo o Props

/*const CardFunctionShort = ({title}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Esse é um texto do card</p>
    </div>
  )
}*/

// ----------------------------------------------------------

export default Card;