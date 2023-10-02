import React, { Component } from 'react';
import Profile from './Profile';

  class App extends Component {
    constructor() {
  
      super();
 this.state = {
 person: {

  fullName: "Toni Soprano",
  profession: "Mafia boss",

   bio: "cosa nostra",
  imgSrc: "https://i.pinimg.com/736x/c7/7d/4c/c77d4c42cd550ffd934541401bc0615a.jpg",
 
  },
    show: false,  
  

};
}
   
toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
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
        <button onClick={this.toggleShow}>Toggle Profile</button>

       {this.state.show } <Profile person={this.state.person} />
       <div>
        
       <h1>{this.state.person.fullName}</h1>
       <p>{this.state.person.bio}</p>
       <img src={this.state.person.imgSrc} alt="https://i.pinimg.com/736x/c7/7d/4c/c77d4c42cd550ffd934541401bc0615a.jpg" />
       <p>{this.state.person.profession}</p>

       </div>
</div>
)}

       
  }


export default App;

