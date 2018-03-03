
import React, { Component } from 'react'
import HeroList from './HeroList'
import fetchMarvelData from '../api'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      heroes: {},
      error: null
    }
  }

  componentDidMount () {
    fetchMarvelData()
      .then(result => {
        this.setState({
          heroes: result.data.results
        })
      })
      .catch(e => {
        this.setState({
          error: e
        })
      })
  }

  render () {
    console.log(this.state.heroes)
    return (
      <HeroList
        heroes={this.state.heroes}
      >
      </HeroList>
    )
  }
}

export default App
