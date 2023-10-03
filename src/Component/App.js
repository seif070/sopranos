import React, { Component } from 'react';

import Profi from './Profi';

  class App extends Component {
    constructor() {
  
      super();
 this.state = {
  
  show:true

  };

    }
   
toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
   
    return (
    
       <div>
        {console.log('state',this.state.show)}
  
        <button type='button' onClick={()=>this.toggleShow()}>Afficher le profil</button>
       {this.state.show ? <Profi /> : (<h1>test</h1>)}

      

        
      </div>
        
      


      
)}

       
  }


export default App;

