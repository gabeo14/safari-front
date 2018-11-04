import React, { Component } from 'react'

class DisplayTable extends Component {
  constructor(props) {
    super(props)
    this.state = { animals: [] }
  }

  componentDidMount() {
    fetch('http://localhost:5001/api/seenanimals')
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
      <table>
        <thead>
          <tr>
            <th colSpan="3">Animals you've seen</th>
          </tr>
          <tr classname="categories">
            <td>Species</td>
            <td>Times Spotted</td>
            <td>Last Location</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thompson's Gazelle</td>
            <td>4</td>
            <td>Arby's</td>
          </tr>
          <tr>
            <td>Bradley's chickamoo</td>
            <td>42</td>
            <td>Between dimensions</td>
          </tr>
          <tr>
            <td>Fluffy cat</td>
            <td>-17</td>
            <td>Wherever she wants</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default DisplayTable
