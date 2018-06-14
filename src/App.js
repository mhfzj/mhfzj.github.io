import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import ImageItem from './component/ImageItem';
import LazyLoad from 'react-lazyload';
class App extends Component {
  componentWillMount(){
    // console.log(data.value);
  }
  render() {
    return (
      <div>
        <div style={{'width':'595px'}} id="header">
          <header>Hello</header>
        </div>
        <div id="pdf" className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          {/* <ImageItem url="-1b4b7940a88588a3.jpg" /> */}
          {data.value.map(item => {
            // console.log(item.filename);
            return <LazyLoad height={200}>
              <ImageItem key={item.key} url={item.filename} />
            </LazyLoad> ;
          })}
        </div>
        <div className="footer">
          <footer>
            <h1>End</h1>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
