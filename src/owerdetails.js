import React from 'react';

class OwnerDitails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:0,
            email:"",
            phones :[],
        }
    }
    render()
    {
        return(
            <React.Fragment>
                <label>Name: {this.state.name}</label>
                <label>E-mail: {this.state.email}</label>
                <label>Phone: {this.state.phones}</label>
            </React.Fragment>
        );
    }
}