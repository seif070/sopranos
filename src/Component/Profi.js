import React, { Component } from 'react'

export default class Profi extends Component {
    constructor() {
  
        super();
   this.state = {
   
  
    fullName: "Toni Soprano",
    profession: "Mafia boss",
  
     bio: "cosa nostra",
    imgSrc: "https://i.pinimg.com/736x/c7/7d/4c/c77d4c42cd550ffd934541401bc0615a.jpg",
    show:true,
     cont:0,
    
    
  
  };
  }
     
  
    componentDidMount() {
      this.timerInterval = setInterval(() => {
        this.setState((prevState) => ({
        
          cont: prevState.cont + 1,
        }));
      }, 1000); 
    }
    
  
  render() {
    return (

      <div>
  
  <div>
   
  <h1>{this.state.fullName}</h1>
  <p>{this.state.bio}</p>
  <p>{this.state.profession}</p>

  <img src={this.state.imgSrc} 
  alt="https://i.pinimg.com/736x/c7/7d/4c/c77d4c42cd550ffd934541401bc0615a.jpg" 
   style={{width:'250px',height:'300px'}}/>
   <p>Count : {this.state.cont}{" "} sec</p>
  </div>

      </div>
    )
  }
}
