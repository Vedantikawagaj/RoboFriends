import './App.css';
import React, {Component} from 'react';
import { robots} from '../Components/robots';
import tachyons from 'tachyons';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from './Scroll';
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       robots: robots,
       searchField: '',
    }
  }
  
  onSearchChange = (event)=>{
    this.setState({
      searchField: event.target.value
    })
      
  }
  render(){
    const filterRobots = this.state.robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc '>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <CardList robots={filterRobots}/>
        </Scroll>
        
      </div>
    ); 
  }
}


export default App;
