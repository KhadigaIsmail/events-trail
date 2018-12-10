import React from 'react';

class Resources extends React.Component{
    constructor(){
        super();
        this.state={
            resources : [],
            arrayOfOwners:['loly','khadiga','nada'],
            index : 0,
            addtoay7agaya7abibi : this.addtoay7agaya7abibi.bind(this),
        }
    }
    showaddform=()=>
    {
        document.getElementById("addResourcesFrom").style.display='block';
    }
    addResource=()=>{
        let arr =  [];
        for(let i =  0 ; i<this.state.arrayOfOwners.length ; i++)
        {
            if(document.getElementById().checked)
            {
                arr.concat(document.getElementById().value);
            }
        }
        const resObj = {
            name :   document.getElementById("addResourcesFrom").value,
            details : document.getElementById("addResourcesFrom").value,
            feedback :  document.getElementById("addResourcesFrom").value,


        }
        this.setState((prevstate)=>({
            resources : prevstate.resources.concat(resObj

            ),
        }));
    }
    addtoay7agaya7abibi=(e)=>{
        e.preventDefault();
    }
    render()
    {
        return(
            <div>
                <div>
                    <h2>Add Resource</h2>
                    <button onClick={this.showaddform}>Add</button>
                    <form id ="addResourcesFrom" onSubmit={this.addtoay7agaya7abibi} style={{display:'none'}}>
                        <label>Name</label>
                        <input type="text"></input>
                        <label>Details</label>
                        <input type="text"></input>
                        <label>Feedback</label>
                        <input type="text"></input>
                        <div>
                        {   
                            this.state.arrayOfOwners.map((onr)=>{
                                return(
                                    <div>
                                        <input type="checkbox" value={onr} id ={"owner"}></input>
                                        <label>{onr}</label>
                                    </div>
                                );
                             })
                        }
                        </div>
                        <label>Last Updated</label>
                        <input type="text"></input>
                        <button>Cancle</button>
                        <button onClick={this.addResource}>Done</button>
                    </form>
                </div>
                <div>

                </div>
            </div>                
        );
    }
}

export default Resources;