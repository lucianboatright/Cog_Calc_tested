import React, { useState, FC, createContext } from 'react';


export const Context = createContext();

export class Provider extends React.Component {
    state = {
        season: ""
    }

    render() {
        
        return(
            <Context.Provider value={{
                state: this.state,
                handleChange: (event) => this.setState({
                    season: event.target.value
                })
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}