import React from 'react'

class Body extends React.Component
{
    constructor(props)
    {
        super (props);
        this.state = {
                        value: '',
                        todo:[]
                     };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit()
    {
        let mytodolist = this.state.todo;
        let item = this.state.value;
        mytodolist.push(item);
        this.setState({
            todo:mytodolist,
            value: ''
        })
    }
    deleteTodo()
    {

    }

    render()
    {
        return (
            <div>
                    <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
                    <button  onClick = {this.handleSubmit}>Add Task</button>
                    <ul>
                        {this.state.todo.map((val,index)=><li key = {index}>
                            {val} 
                            <button onClick = {this.deleteTodo}>Delete</button>
                            </li>)}
                    </ul>
            </div>
        );
        
    }
}



export default Body;