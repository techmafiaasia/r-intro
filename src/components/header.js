import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        let styles = {
            header:{
                background: '#03a9f4',
            },
            logo:{
                color: '#fff',
                textAlign: 'center'
            }
        }
        return (
            <header style = {styles.header}>
                <div style = {styles.logo}>logo</div>
                <input type = "text" />
            </header>
        )
    }
}
