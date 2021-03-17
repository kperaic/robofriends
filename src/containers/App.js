import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component { //also can be React.Component
	constructor()  {   //below represents your state, it's what describes your app, it can change and affect your app, it's usually in the parent component which passes it onto children
		super()		   //by super you are able to call the constructor of Component
		this.state = {  //just usual syntax to declare state 
			robots: [],  //represents the array of Robots
			searchfield: '' //represents an empty searchbox
		}
	}

componentDidMount () { //this method is part of react, check lifecycle methods 
	fetch('https://jsonplaceholder.typicode.com/users')  //we get the users with fetch, it comes with all browsers and we use it to make requests to servers
	.then(response => response.json()) // we get a response, some json magic (i think it's converted to json)
	.then(users=> this.setState({robots: users})); //we get the users and update them with state

}

// anytime you create your own methods on a component, use arrow functions => it makes sure that "this" value will be according to where it was created (in App). Otherwise you get error when you type in search
onSearchChange = (event)=> {  // a function which means that every time it gets input we get an event (like DOM manipulation), 
	this.setState({ searchfield: event.target.value})  //event.target.value is just how it is with event, it will give you the value of search job. setState is a method that comes with React, you use it whenever you want to change state
}

render() {
	const { robots, searchfield } = this.state;  //you destructure here this.state so you don't need to use it below
	const filteredRobots = robots.filter(robot => {  //you access robots from the component and filter it based on the input in searchfield
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());   //this is a condition, if the lowercased robot name includes the entered searchfield, then return the value
	}) 

	if (!robots.length) {  //if there is no length(0) it will be false, but then turn it into true and return Loading
		return <h1>Loading</h1>
	} else {
		return  ( //inside you pass the onSearchChange function; {Robots={filteredRobots} is how you communicate with CardList
	  <div className = 'tc'>  
		<h1 className = 'f2'>RoboFriends</h1> 
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList Robots={filteredRobots} /> 
		</Scroll>
	  </div> 
	);
	}
	}
}

export default App;

//App just passes down states as props, which are getting rendered
// every time there is a change on input, an event, it updates the searchfield input, then with that info we can communicate with CardList to filter the robots state to whatever is in searchfield