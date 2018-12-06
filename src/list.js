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
            adddetails : this.adddetails.bind(this),
            //index variable to s ids for some elements
            index : 0,
            //if edit_bool is any aother value else 0 then i'm editing now - if = 0 then i'm adding
            show_bool : 0,
            xx : 0,

        }
     
    }
    adddetails=(e)=>{
        this.state.xx = e.target.id;
        
        this.setState((prevstate)=>({
            
            items : prevstate.items[0].details.push(<p>eshta8al ya 7abiby</p> )    
          
        }));        
    }
    show_hide=(e)=>{
        
        
        var x = document.getElementById(e.target.nextSibling.nextSibling.id);
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            
        }
        

    }
   
    //<div id ={"d"+this.state.index} styles={{display :'none',}} >7aga</div> 
    //onClick={this.show_hide}
    addItem=()=>{
        
            this.state.textInTexbox = document.getElementById("textbox").value;
            this.state.textInTexbox.trim();

            if(this.state.textInTexbox)
            this.setState((prevstate)=>({
                items : prevstate.items.concat(     
               {
                   name : this.state.textInTexbox,
                   button : <button onClick={this.adddetails} id={this.state.index}>arow</button>,
                   detalis : [<p>3'oooor</p>],
                   indx : this.state.index,
                })
            }));
            //console.log(document.getElementById('d1').style);
            this.setState((prevstate)=>({index : prevstate.index+1}));
            document.getElementById("textbox").value="";
        //console.log(this.state.items);
       

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
          {this.state.items.map((N)=>{
                return <div> 
                  
                  <h6>{N.name}</h6>
                  {N.button}
                  
                  <div>
                    {N.details}
                  </div>
                </div>

                
              })
            }
          </div>
        </div>
      );
    }
}


export default Todolist;