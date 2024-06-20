import React, { Component, setState , useState } from 'react';
class Counter extends Component {
    //state is an object that includes data that componenets need
    state={
        value : this.props.counter.value ,
        //imageUrl : "https://picsum.photos/200"
        //tags : []
    };
   
    renderTags(){
        if (this.state.tags.length===0) return <p>There are no tags !</p> ;
        return <ul> {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
    }
     handleIncrement=()=>{
        //without arrow func syntax we wouldn't be able to call the function later as the THIS will reference window object
        //then we can use bend in the constructor
        this.setState({value : this.state.value + 1}) }
    
    render() { 
        console.log(this.props) //props are the "value" and "selected" added in counters.jsx while calling <Counter/>
        //return (<h1>Hello !</h1>) //JSX
        //if we have more than one element we must use FRAGMENT <></> because of the React.CreateElement....
        return(
            //we use braces {..} to render values dynamically in JSX
            //<img src={this.state.imageUrl}/>
            //li should have a key value
            
            //true && "message" => "message"
            //onClick=handleIncremenet MUST BE CALLED AS A FUNCTION REFERENCE NOT A FUNCTION
            //{this.state.tags.length===0 && <h1>Please enter some tags</h1>}
             //{this.renderTags()}
            <>
            {this.props.children}
            <span className={this.getBadgeClasses()} style={{fontSize : 15}}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">PLUS</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            <br/>
            
            </>
        )
    }
  
    formatCount(){
        const {value} = this.state //destructering to avoid writing this.state.count everytime
        return value === 0 ? "Zero" : value 
    }
    getBadgeClasses(){
        var classes="badge m-2 ";
        classes +=(this.state.value===0) ?  "badge-warning" : "badge-primary" ;
        return classes;
    }
}
 
export default Counter;