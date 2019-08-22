import React from 'react';

class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        Trust: false,
      
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
 
    
    handleClick() {
        
      this.setState({
        liked: !this.state.liked,
        

      })

      
      document.getElementById('trustbutton').style.color="green"
      

      
    }
    // button{
  
    //     color: white;
    //   }
    //   #trustbutton:focus{
    //     background-color: #2ecc71;
    //     color: white;
        
    //   }
      
      
      
      



    render() {
      const text = this.state.liked ? 'Trust' : 'don\'t trust';
      const label = this.state.liked ? 'Trust' : 'Untrust'
      return (
        <div className="customContainer">
          <button name="button"  id='trustbutton' className="buttonlike" onClick={this.handleClick}>
            {label}</button>
          <p id='para'>
            You  {text} this person.
          </p>
        </div>
      );
    }
  }
  
 export default LikeButton