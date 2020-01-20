import React, { Component } from 'react';
class Counter extends Component {
    

     

    


    render() { 
        return (  

<div>
<span className={this.getBadgeClasses()}>{this.formatValue()}</span>
    <button
    onClick={()=> this.props.onIncrement(this.props.ok)}
    className="btn btn-secondary btn-sm m-3"
    
    >Increment</button>
    <button onClick={()=>this.props.onDelete(this.props.ok.id)}
            className="btn btn-danger btn-sm m-2">Delete
</button>
   
  </div>



        );
    }


    getBadgeClasses(){


        let classes = "badge m-2 badge-";
        classes+= this.props.ok.value === 0 ? "warning" : "primary";

        return classes;


    }

    formatValue(){
        const { value } = this.props.ok;
        return value === 0 ? "Zero" : value;





    }





}
 
export default Counter;