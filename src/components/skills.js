import React from 'react';

export default class Skills extends React.Component{
    constructor(props){
        super(props);

        this.state={
            UserInput: '',
            list: []
        }
    }

    changeUserInput(input){
        this.setState({
            UserInput: input
        });
    }

    addToSkills(input){
        let listSkills=this.state.list;

        listSkills.push(input);
        this.setState({
            list: listSkills
        })
    }
    

    render(){
        return(
            <div  className='addSkills' >
                <button 
                onClick={ ()=> this.addToSkills(this.state.UserInput)}>
                    Add Skills
                </button>
                <br/>
                <input 
                onChange={(e)=>this.changeUserInput(e.target.value)}
                value={this.state.UserInput}
                type='text'
                >  
                </input>
                
                <ul>
                    
                        {this.state.list.map( (val)=> <li onClick={this.handleChange}>{val}</li>)}
                        
                    
                </ul>


            </div>
        )
    }







}