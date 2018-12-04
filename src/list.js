import React from 'react';
//import './index.css';
//import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

  

class Todolist extends React.Component
{

   constructor(props){
        super();
        this.state={
            //array of items in to do list
            items: [],
            
            textInTexbox : "",
            show_hide : this.show_hide.bind(this),
            //index variable to s ids for some elements
            index : 1,
            //if edit_bool is any aother value else 0 then i'm editing now - if = 0 then i'm adding
            show_bool : 0,

        }
     
    }
  
    show_hide=(e)=>{
        
        
        var x = document.getElementById(e.target.nextSibling.nextSibling.id);
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            
        }
        

    }
   
    addItem=()=>{
        
            this.state.textInTexbox = document.getElementById("textbox").value;
            this.state.textInTexbox.trim();

            if(this.state.textInTexbox)
            this.setState((prevstate)=>({
                items : prevstate.items.concat( 
                    <div  id = {this.state.index}>
                    <p id={"p"+this.state.index}>{this.state.textInTexbox}</p>
                    <button onClick={this.show_hide}>arow</button>
                    <button onClick={}>add</button>
                    <div id ={"d"+this.state.index} styles={{display :'none',}} >7aga</div> 
                   
    
                </div>
                )
            }));
            //console.log(document.getElementById('d1').style);
            this.setState((prevstate)=>({index : prevstate.index+1}));
            document.getElementById("textbox").value="";
        
       

    }
    
   
    render()
    {
      return(
        <div class="">
          <div class = "toDoListHead" >
                <h1>add material</h1>
                <label>name </label>
                <input type="text" id = "textbox"></input>
                <button onClick={this.addItem}>add</button>
          </div>
          <div class ="">
               {this.state.items}
          </div>
        </div>
      );
    }
}


export default Todolist;