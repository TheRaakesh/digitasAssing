import './App.css';
import React,{Component} from 'react';
import Navbar from './component/navbar';
import Car from './component/car';
import Tab from './component/tab';
import Body from './component/body';
import SocialLinks from './component/soicalLin';


class App extends Component {

  render() { 
    return ( 
    <div className="App">
    <SocialLinks/>
    <Navbar/>
    <Tab/>
    </div> 
  );
  }
}

export default App;
 

