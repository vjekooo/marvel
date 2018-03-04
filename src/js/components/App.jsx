
import React, { Component } from 'react'
import HeroList from './HeroList'
import Header from './Header'
import Footer from './Footer'
import MyAvengers from './MyAvengers'
import JoinAvengers from './JoinAvengers'
import fetchMarvelData from '../api'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      heroes: {},
      error: null
    }
  }

  componentWillMount () {
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
      <div className="container">
        <Header />
        <JoinAvengers />
        <div className="content">
          <HeroList
            heroes={this.state.heroes}
          >
          </HeroList>
          <MyAvengers />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
