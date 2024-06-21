import React, { Component } from 'react';
import Counter from './counter';
//PROPS VS STATES : props are set inside <COUNTER/> , read only (cannot be changed) parent -> child  , for rendering dynamic
// data in components /  ki bch t3adi composant(nom...) men component l component
// VS state are local to the component , can be changed , Used to manage dynamic data that can change over time
// parameter de composant nom,prenom,age
class Counters extends Component {
   
    render() { 
        return (<div>

            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>

            {this.props.counters.map(counter => /*props are here*/ 
             <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                 counter={counter} //instead of value={counter.value} id={counter.id}
                
                
            />
            //we can make Counter as a normal tag and add content (<h1>...) in the tag and we will have CHILDREN (h1) added to PROPS
                )}
        </div>);
    }
}
 
export default Counters;