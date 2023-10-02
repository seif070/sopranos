import React, { Component } from 'react';




class Profile extends Component {
  constructor() {

    super();
    this.state = {
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
  this.setState((prevState) => ({
  elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  render() {
    return (


      <div>

<p>{this.state.elapsedTime} seconds</p>
      </div>
  );
}
}

      export default Profile;
