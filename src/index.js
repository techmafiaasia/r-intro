import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import JSON from './db.json';
//components
import Header from './components/header';
import News_list from './components/news_list';

class App extends Component{
  state = {
    news: JSON
  }
  render(){
    return(
      <div className = "header">
        <Header />
        <News_list news = {this.state.news}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


