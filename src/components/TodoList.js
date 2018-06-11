import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ul style={ESTILOS.list}>
                    {this.props.data.map((todo, i) => {
                        return <Todo key={todo.id} {...todo}  />
                    })}
                </ul>
            </div>
        );
    }
}

const ESTILOS = {
    list: {
        color: '#555',
        fontSize: '18px',
        fontFamily: 'courier, monospace',
        //border: '1px solid #dedede',
        padding: '0 !important'
    },
    lines: {
        borderLeft: '1px solid #ffaa9f',
        borderRight: '1px solid #ffaa9f',
        width: '2px',
        float: 'left',
        height: '495px',
        marginLeft: '40px'
    }
}