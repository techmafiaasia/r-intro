import React, { Component } from 'react'

export default class Header extends Component {

    state = {
       
        keywords: 'hello'
    }

    inputChangeHandler = (e) => {
        this.setState({
            keywords: e.target.value
        })
    }
    render() {
        
        return (
            <header>
                <div className = "logo" onClick = {() => console.log('inline onclick function')}>logo</div>
                <input type = "text" onChange = {this.inputChangeHandler} />
               
            </header>
        )
    }
}
