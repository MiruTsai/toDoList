import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Guidebar from './component/guidebar';
import { BrowserRouter, Route } from 'react-router-dom'
import Finished from './component/finished';
import Deleted from './component/deleted';
import TodoItem from './component/todoitem'
import SubItem from './component/subitem';
import { ENGINE_METHOD_ALL } from 'constants';
import Undo from './component/undo';

  

const root = document.querySelector('#root');

const Header = (props) => {
  return (<header>
    <h1>{props.title}</h1>
  </header>);
};

class AddToDo extends React.Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      name: ""
    })
  }
  render() {
    return (
      <div className="add_todo" >
        <form onSubmit={this.handleSubmit}>
          <label>Add New To Do:</label>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
        </form>
      </div>
    );
  }
}

const Listboard = (props) => {

    // } else if (this.state.filter === "deleted") {
    //   console.log("deleted", this.state.deleted)
    //   todo = (this.state.deleted.map(list => 
    //     <SubItem
    //       name={list.name}
    //       key={Math.floor(Math.random() * 1000).toString()}
    //       id={list.id}
    //     />
    //   ));        
    // } 
    // else {
    //   todo = (this.state.finished.map(list =>
    //      <SubItem
    //       name={list.name}
    //       key={Math.floor(Math.random() * 1000).toString()}
    //       id={list.id}
    //     />
    //   ))
    // }
    return (      
    <div className='board'>
      {todo}      
    </div>
    ) 
}

class App extends React.Component {
  state = {
    // filter: "lists",
    lists: [
      { name: 'Laundry', id: 1 },
      { name: 'Buy Present', id: 2 }
    ],
    finished: [],
    deleted: []
  }

  handleRemoveItem = (id) => {
    this.setState(prevState => {
      console.log(prevState.lists.filter(p => p.id === id))
      let removelist = prevState.lists.filter(p => p.id === id)
      return {
        lists: prevState.lists.filter(p => p.id !== id),
        deleted: this.state.deleted.concat(removelist)
      }
    })
  }

  finishTodo = (id) => {
    this.setState(prevState => {
      let finishItem = prevState.lists.filter(p => p.id === id)
      return {
        lists: prevState.lists.filter(p => p.id !== id),
        finished: this.state.finished.concat(finishItem)
      }
    })
  }

  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 1000).toString();
    todo.key = todo.id
    let todos = [...this.state.lists, todo];
    this.setState({
      lists: todos
    });
  }
  // let todo;
  // if (!this.state.lists.length) {
  //   todo = (<p className='finish'>There is nothing left to do :D</p>);
  // } else {
  //   todo = (this.state.lists.map(list =>
  //     <TodoItem
  //       name={list.name}
  //       key={Math.floor(Math.random() * 1000).toString()}
  //       id={list.id}
  //       removeItem={this.handleRemoveItem}
  //       finishItem={this.finishTodo}
  //     />
  //  ));
  // }
  
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
      <Header title='To Do List' /> 
        {/* {this.state.lists.map(list =>
      <TodoItem
        name={list.name}
        key={Math.floor(Math.random() * 1000).toString()}
        id={list.id}
        removeItem={this.handleRemoveItem}
        finishItem={this.finishTodo}
      />)} */}
      
        <Guidebar />
        <Route exact path="/dist" render={()=>this.state.lists.map(list =>   
        <TodoItem
        name={list.name}
        key={Math.floor(Math.random() * 1000).toString()}
        id={list.id}
        removeItem={this.handleRemoveItem}
        finishItem={this.finishTodo}
      />)} />
        <Route path="/finished" render={()=>Finished(this.state.finished)}  />
        <Route path="/deleted" render={()=>Deleted(this.state.deleted)} />
      <AddToDo addTodo={this.addTodo} name />
      </div>
      </BrowserRouter>
     )
    ;
  }
}
ReactDOM.render(<App />, root);