import React, { Component } from 'react';

class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      position: 0,
    };
  }

  componentDidMount() {
    // Listen for right arrow key press to move the ball
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up event listener when component unmounts
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    // If Right Arrow key is pressed, move the ball 5px to the right
    if (event.keyCode === 39 && this.state.showBall) {
      this.setState((prevState) => ({
        position: prevState.position + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    // Show the ball when the start button is clicked
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
              backgroundColor: 'green',
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default GolfGame;
