import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Square extends React.Component { // Клетка
    constructor(props){ // 1 добавим конструктор к классу, чтобы инициализировать состояние
        super(props)
        this.state = {
            valve: null
        }
    }
    render() {
      return (
        <button 
            className="square" 
            onClick={() => this.setState({ value: 'X'})} // 2 мы говорим , что нужно перерендерить Square при каждом клике по <button>
        >
            {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component { // Поле
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component { // Игра
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );