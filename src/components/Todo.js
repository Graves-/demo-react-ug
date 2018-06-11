import React, { Component } from 'react';
import { Checkbox, Grid } from 'semantic-ui-react';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        };
        this.onTodoChanged = this.onTodoChanged.bind(this);
    }

    render() {
        return (
        <div>
            <li id={this.props.id} style={style.li}>
                <Grid>
                    <Grid.Column width={6}><Checkbox onChange={this.onTodoChanged} checked={this.state.isChecked} /></Grid.Column>
                    <Grid.Column width={6}><span style={this.state.isChecked ? style.strike : null}>{this.props.text}</span></Grid.Column>
                </Grid>
                
            </li>
        </div>
        );
    }

    onTodoChanged(e){
        this.setState({isChecked: !this.state.isChecked });
    }
}

const style = {
    li: {
        listStyleType: 'none',
        borderBottom: '1px dotted #ccc',
        height: 'auto',
        padding: '10px',
        textTransform: 'capitalize'
    },
    strike: {
        textDecoration: 'line-through',
        color: 'red'
    }
};