import React from 'react';
//import './index.css';
//import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

  class SmallMaterial extends React.Component
  {
      constructor(props)
      {
          super(props);
          this.state={
            name : props.textInTexbox,
            adddetails : this.adddetails.bind(this),
            addStore:this.addStore.bind(this),
            button : <button onClick={this.adddetails} id={props.index}>arrow</button>,
            details : [],
            indxDetails : 0,
          }
      }
      addStore=(e)=>
      { 
         alert(document.getElementById("name"+e.target.id).value);
          const obj = { 
             storeName : document.getElementById("name"+e.target.id).value,
             storeZone : document.getElementById("zone"+e.target.id).value,
             storePhone: document.getElementById("phone"+e.target.id).value,
             storeNotes: document.getElementById("notes"+e.target.id).value,
             storeUrl : document.getElementById("URL"+e.target.id).value,
             storeDays: document.getElementById("days"+e.target.id).value,
             storeLastUpdate: document.getElementById("lastUpdate"+e.target.id).value,
             storePrice: document.getElementById("price"+e.target.id).value
             
          };
        this.setState((prevstate)=>({
            details : prevstate.details.concat([<Stores storeInfo={obj}></Stores>])    
        })); 
      }
      adddetails=(e)=>{        
              
        var x = document.getElementById("detailsForm"+e.target.id);
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            
        }
        
    }
    render()
    {
        return(
        <React.Fragment>
        <div>{this.state.name}</div>
        
        <div>{this.state.button}</div>
        <form id={"detailsForm"+this.props.index} style={{display:"none"}} onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <input id={"name"+this.props.index} placeholder="store name"></input>
            <input id={"zone"+this.props.index} placeholder="store zone"></input>
            <input id={"phone"+this.props.index} placeholder="store phone"></input>
            <input id={"notes"+this.props.index} placeholder="store notes"></input>
            <input id={"price"+this.props.index} placeholder="store Price"></input>
            <input id={"URL"+this.props.index} placeholder="store link"></input>
            <input id={"days"+this.props.index} placeholder="when Open"></input>
            <input id={"lastUpdate"+this.props.index} placeholder="last update"></input>
            <button id={this.props.index} onClick={this.addStore}>Done</button>
        </form>
        </React.Fragment>
    );
       
    }
    
  }

  class Stores extends React.Component
  {
    constructor(props)
    {
        super(props);
        this.state={
            storeName:this.props.storeInfo.storeName,
            zone:this.props.storeInfo.storeZone,
            notes:this.props.storeInfo.storeNotes,
            price:this.props.storeInfo.storePrice,
            locationLink:this.props.storeInfo.storeUrl,
            phone:this.props.storeInfo.storePhone,
            lastUpdated:this.props.storeInfo.storeLastUpdate,
            days:this.props.storeInfo.storeDays
        }
    }

  }
class Todolist extends React.Component
{

   constructor(props){
        super();
        this.state={
            //array of items in to do list
            items: [],
            textInTexbox : "",
            //index variable to s ids for some elements
            index : 0,
            //if edit_bool is any aother value else 0 then i'm editing now - if = 0 then i'm adding
            show_bool : 0,
        }
     
    }

    addItem=()=>{
        
            this.state.textInTexbox = document.getElementById("textbox").value;
            this.state.textInTexbox.trim();

            if(this.state.textInTexbox)
            this.setState((prevstate)=>({
                items : prevstate.items.concat(     
                    [<SmallMaterial textInTexbox={this.state.textInTexbox} index = {this.state.index}/>]
                )
            }));
            this.setState((prevstate)=>({index : prevstate.index+1}));
            document.getElementById("textbox").value="";
           }
    
    render()
    {
      return(
        <div className="">
          <div className = "toDoListHead" >
                <h1>add material</h1>
                <label>name </label>
                <input type="text" id = "textbox"></input>
                <button onClick={this.addItem}>add</button>
          </div>
          <div className ="">
          {this.state.items.map((itm)=>{
                return <div key={itm.indx}> 
                  {itm}
                </div>
              })
            }
          </div>
        </div>
      );
    }
}


export default Todolist;