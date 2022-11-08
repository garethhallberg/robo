import React, { Component } from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundary';



class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({ robots: users}))
    
  }

  onSearchBarChange = (event) => {
    console.log('hello world searched ' + event.target.value)
    this.setState({ searchfield: event.target.value })
  }

  render(){
    const { robots, searchfield } = this.state;
    const fiteredRobots = robots.filter(robot => { 
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return robots.length === 0 ? <h1>Loading stuff baby</h1> : 
    (
        <div className='tc'>
          <h1 className="f1">RoboFriends</h1> 
          <SearchBox searchChange={this.onSearchBarChange} />
          <Scroll>
            <ErrorBoundary>
              <Cardlist robots={ fiteredRobots } />
            </ErrorBoundary>
          </Scroll>
          
        </div>
      );
  
 
  }
  
}

export default App;
