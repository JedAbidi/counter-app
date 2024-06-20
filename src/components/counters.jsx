import React, { Component } from 'react';
import Counter from './counter';
//PROPS VS STATES : props are set inside <COUNTER/> , read only (cannot be changed) parent -> child  , for rendering dynamic
// data in components /  ki bch t3adi composant(nom...) men component l component
// VS state are local to the component , can be changed , Used to manage dynamic data that can change over time
// parameter de composant nom,prenom,age
class Counters extends Component {
    //when deleting a counter we will delete it from this state (mutable) so it should be done in this components
    state = {
        counters : [
            {id:1, value:7},
            {id:2, value:0},
            {id:3 , value:0},
            {id:4, value:0},
        ]
      } ;
      handleDelete = (counterId) => {
        const co=this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters : co})
      }
      //we add onDelete as a prop then we add it counter.js button bys saying this.props.onDelete
    render() { 
        return (<div>
            {this.state.counters.map(counter => /*props are here*/  <Counter 
                key={counter.id} onDelete={this.handleDelete} counter={counter} //instead of value={counter.value} id={counter.id}
            />
            //we can make Counter as a normal tag and add content (<h1>...) in the tag and we will have CHILDREN (h1) added to PROPS
                )}
        </div>);
    }
}
 
export default Counters;