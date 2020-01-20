import React, { Component } from 'react';
class Counter extends Component {
    state = {  

        value: this.props.ok.value,
        tags:["tags1","tags2","tags3"]
       



    };

    handleIncrement =product =>{
       // console.log(product);

        this.setState({value: this.state.value+1});
    };

    handleDecrement =()=>{

        this.setState({value:this.state.value-1});
    };
    


    render() { 
        return (  

<div>
<span className={this.getBadgeClasses()}>{this.formatValue()}</span>
    <button
    onClick={()=>this.handleIncrement()}
    className="btn btn-secondary btn-sm m-3"
    
    >Increment</button>
    <button
    onClick={()=>this.handleDecrement()}
    classname="btn btn-secondary btn-sm"
    
    >Decrement</button>
    <button onClick={()=>this.props.onDelete(this.props.ok.id)}
            className="btn btn-danger btn-sm m-2">Delete
</button>
    <ul>
        {this.state.tags.map(ok =><li key={ok}>{ok}</li>)}



    </ul>



            </div>



        );
    }


    getBadgeClasses(){


        let classes = "badge m-2 badge-";
        classes+= this.state.value === 0 ? "warning" : "primary";

        return classes;


    }

    formatValue(){
        const { value } = this.state;
        return value === 0 ? "Zero" : value;





    }





}
 
export default Counter;