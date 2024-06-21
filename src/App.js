import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'
import React, { Component } from 'react';


class App extends Component {
   //when deleting a counter we will delete it from this state (mutable) so it should be done in this components
   //LIFTING THE STATE UP : lifting all counters elemnts from counters.jsx(child) to App.js (father)so that we can use them in the navbar 
   state = {
    counters : [
        {id:1, value:7},
        {id:2, value:0},
        {id:3 , value:0},
        {id:4, value:0},
    ]
  } ;
  handleIncrement = (counter) => {
        const counters=[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter}
        counters[index].value++;
        this.setState({counters})
  }
  handleDelete = (counter) => {
        const counters=[...this.state.counters];
        const index = counters.indexOf(counter);
        counters.splice(index,1);
        this.setState({counters});
  }
  //we add onDelete as a prop then we add it counter.js button bys saying this.props.onDelete
  handleReset = () => {
        const c=[...this.state.counters];
        const c1=c.forEach(counter => counter.value=0);
        this.setState({c1});
  }
  render(){
  return (
    <>
      <NavBar 
        totalCounters={this.state.counters.length}
      />
      <main className='container'>
        <Counters /*props*/  onReset={this.handleReset} 
        onDelete={this.handleDelete}
         onIncrement={this.handleIncrement}
         counters={this.state.counters} />
      </main>
    </> 
  );
  };
}

export default App;
