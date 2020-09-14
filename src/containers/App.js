import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css';



class App extends React.Component {
    constructor(){
        super()
        this.state ={
            robots:[],
            searchField: '',
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}))
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        })
        let loading
        !this.state.robots.length?
            loading = <h1 className='f1'>Loading...</h1>:        
            loading = 
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {loading}
            </div>
        )
    }
}
export default App;