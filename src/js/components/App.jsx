
import React, { Component, Fragment } from 'react'
import AvengersList from './AvengersList'
import Header from './Header'
import Footer from './Footer'
import MyAvengers from './MyAvengers'
import JoinAvengers from './JoinAvengers'
import Overlay from './Overlay'
import fetchAvengers from '../api'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avengers: {},
      myAvengers: {},
      fetchingAvengers: false,
      overlayVisibility: false,
      error: null
    }
  }

  componentDidMount () {
    fetchAvengers()
      .then(result => {
        this.setState({
          avengers: result
        })
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  render () {
    const { avengers, overlayVisibility } = this.state
    console.log(avengers)
    return (
      <Fragment>
        <div className="container">
          <Header />
          <JoinAvengers />
          <section className="content">
            <AvengersList
              avengers={avengers}
            >
            </AvengersList>
            <MyAvengers />
          </section>
          <Footer />
        </div>
        <Overlay
          overlayVisibility={overlayVisibility}
        />
      </Fragment>
    )
  }
}

export default App
