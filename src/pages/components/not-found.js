import React, { PureComponent } from 'react';
import './generic-page.css';

class NotFound extends PureComponent {
  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`, { id: random})
  }
  handleForwardClick = () => {
    this.props.history.goForward();
  }
  handleBackClick = () => {
    // this.props.history.goBack();
    this.props.history.go(-1);
  }
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la pรกgina que buscabas</h2>
        <button
          className="Button"
          onClick={this.handleForwardClick}
        >
          Ir a la siguiente ruta ๐
        </button>
        <button
          className="Button"
          onClick={this.handleBackClick}
        >
          Ir a la ruta anterior ๐
        </button>
        <button
          className="Button"
          onClick={this.handleRandomClick}
        >
          Video random ๐
        </button>
      </div>
    )
  }
}

export default NotFound