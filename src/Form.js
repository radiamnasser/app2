import React from "react";
import Etiquette from "./Etiquette";
import Age from "./Age.js";



class Form extends React.Component {

    constructor(props) {
        super(props);
         this.state = {
           pseudo: props.pseudo,
           email: props.email,
           age:props.age
    }

}
    handleInput = (e) => {

        if(e.target.name === 'nickname') {
            this.setState({
                pseudo: e.target.value
            });
        } else if((e.target.name === 'email')){
            this.setState({
                email: e.target.value
            });
           
        }
        else if(e.target.name === 'age'){
            this.setState({
                age: e.target.value
            });

        }
        
        }

    render() {

        return (
            <>
                <Etiquette 
                pseudo={this.state.pseudo}
                email={this.state.email} />
                <Age age={this.state.age} />
                
                <form method='get'>
                    <label>
                        <span>My nickname</span>
                        <input
                            type='text'
                            name='nickname'
                            autoComplete="off"
                            defaultValue={this.state.pseudo}
                            onChange={(e) => this.handleInput(e)}
                        />
                    </label>
                    <label>
                        <span>My email</span>
                        <input
                            type='email'
                            name='email'
                            autoComplete="off"
                            defaultValue={this.state.email}
                            onChange={(e) => this.handleInput(e)}
                        />
                    </label>
                    <label>
                        <span>My Age</span>
                        <input
                            type='number'
                            name='age'
                            autoComplete="off"
                            defaultValue={this.state.age}
                            onChange={(e) => this.handleInput(e)}
                        />
                    </label>
                    <div className='btns-container'>
                        <button type='reset'>Cancel</button>
                        <button type='submit'>Validate</button>
                    </div>
                </form>
            </>
        );
    }
}

export default Form;