import React, { Component } from 'react';
import { Input} from 'semantic-ui-react';

export default class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            inputText: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} style={{paddingBottom: 25}}>
                <Input
                    type='text' 
                    value={this.state.inputText} 
                    onChange={(e)=>{this.setState({inputText: e.target.value})}} 
                    size='large'
                    transparent
                    placeholder='Nuevo To-Do'
                    fluid
                    style={{padding: '0 50px 0 50px'}}
                />
                {/*<Button type='submit' style={ESTILOS.btn} color='#f44242'><Icon name='add'/> Agregar</Button>*/}
            </form>
        );
    }

    onFormSubmit(e){
        e.preventDefault();
        if(this.state.inputText !== ''){
            this.props.addTodo(this.state.inputText);
            this.setState({inputText: ''});
        }
    }
}

