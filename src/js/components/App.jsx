
import React, { Component } from 'react'
import AvengersList from './AvengersList'
import Header from './Header'
import Footer from './Footer'
import MyAvengers from './MyAvengers'
import JoinAvengers from './JoinAvengers'
import fetchAvengers from '../api'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avengers: {},
      fetchingAvengers: false,
      error: null
    }
  }

  componentWillMount () {
    fetchAvengers()
      .then(result => {
        this.setState({
          avengers: result
        })
      })
  }

  render () {
    console.log(this.state.avengers)
    return (
      <div className="container">
        <Header />
        <JoinAvengers />
        <section className="content">
          <AvengersList
            avengers={this.state.avengers}
          >
          </AvengersList>
          <MyAvengers />
        </section>
        <Footer />
      </div>
    )
  }
}

export default App
