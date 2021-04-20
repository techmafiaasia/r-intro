import React, { Component } from 'react'

export default class Header extends Component {

    state = {
        title: 'the keywords are: ',
        keywords: 'hello'
    }

    inputChangeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            keywords: e.target.value
        })
    }
    render() {
        console.log(this.state.keywords)
        return (
            <header>
                <div className = "logo" onClick = {() => console.log('inline onclick function')}>logo</div>
                <input type = "text" onChange = {this.inputChangeHandler} />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}
