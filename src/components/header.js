import React, { Component } from 'react'

export default class Header extends Component {

    inputChangeHandler(e){
        console.log(e.target.value);
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
