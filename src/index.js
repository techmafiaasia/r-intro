import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
//components
import Header from './components/header';
import News_list from './components/news_list';
const App = () =>{
  return(
    <div className = "header">
      <Header />
      <News_list />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


