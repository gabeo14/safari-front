import React, { Component } from 'react'
import './App.css'
//import DisplayTable from './DisplayTable.jsx'

class App extends Component {
  state = {
    animals: []
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/seenanimals')
      .then(resp => resp.json())
      .then(json => {
        console.log({ json })
        this.setState({
          animals: json
        })
      })
  }

  handleSearchTermUpdate = e => {
    this.setState({
      term: e.target.value
    })
  }

  search = e => {
    e.preventDefault()
    fetch(`https://localhost:5001/api/search?searchTerm=${this.state.term}`)
      .then(resp => resp.json())
      .then(json => {
        console.log({ json })
        this.setState({
          animals: json
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Animals and Stuff</h1>
        </header>
        <section>
          <form onSubmit={this.search}>
            <input
              type="search"
              onChange={this.handleSearchTermUpdate}
              placeholder="Search for a course..."
            />
            <button>Search</button>
          </form>
          <ul>
            {this.state.animals.map(animal => {
              return (
                <li key={animal.id}>
                  Species: {animal.species} | Times Seen:{' '}
                  {animal.countOfTimesSeen} | Last Location:{' '}
                  {animal.locationOfLastSeen}
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}

export default App
