import React from 'react';
import List from './todo-items';

import '../../App.css'
class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            items: []
        }
    }

    onChange = (e) => {
        this.setState({term: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        })
    }
    render() {
        return (
            <div className="searchbar">
                <form className="App" onSubmit={this.onSubmit}>
                    <input className='newtodo' value={this.state.term}  onChange={this.onChange}/>
                    <button className="btn">GO</button>
                    <List items={this.state.items} />
                </form>
            </div>
        )
    }
}

export default TodoApp;