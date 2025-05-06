import React, { Component } from 'react';

class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      position: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 39 && this.state.showBall) {
      this.setState((prevState) => ({
        position: prevState.position + 5
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ showBall: true });
  };

  render() {
    return (
      <div>
        {!this.state.showBall ? (
          <button className="start" onClick={this.buttonClickHandler}>
            Start
          </button>
        ) : (
          <div
            className="ball"
            style={{
              position: 'relative',
              left: this.state.position + 'px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'green'
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default GolfGame;
