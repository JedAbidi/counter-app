/*import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return (
            <nav className='navbar navbar-light bg-light'>
                <a className='navbar-brand' href="#"> 
                    Navbar <span className='badge badge-pill badge-secondary'>{this.props.totalCounters}</span>  
                </a>
                
            </nav>
        );
    }
}
 
export default NavBar ;*/
//wa can use stateless functional components instead of classes
import React, { Component } from 'react';
const NavBar  = (props) => { //in functional components we need to add props as a parameter and remove this
    return ( 
        
            <nav className='navbar navbar-light bg-light'>
                <a className='navbar-brand' href="#"> 
                    Navbar <span className='badge badge-pill badge-secondary'>{props.totalCounters}</span>  
                </a>
                
            </nav> );
      
    } ;
 
export default NavBar;
//LIFE CYCLE HOOKS : 
//MOUNT (instance of a component created and inserted in the DOM) :1 constructor/2 render/3 componentDidMount (after all rendering is finished)
//UPDATE (props or state of a component gets changed) : render / componentDidMount (Ajax calls to get data from sever)
//UNMOUNT (component removed from the DOM ) : componentWillUnmount (if we delete an element the component is re-rendered)
//THIS IS ONLY USED WHEN CONTENT IS RENDERED IN DOM



