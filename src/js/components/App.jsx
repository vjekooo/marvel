
import React, { Component, Fragment } from 'react'
import AvengersList from './AvengersList'
import Header from './Header'
import Footer from './Footer'
import MyAvengersList from './MyAvengersList'
import JoinAvengers from './JoinAvengers'
import Overlay from './Overlay'
import fetchAvengers from '../api'
import { getDate } from '../helpers'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avengers: {},
      currentAvenger: null,
      myAvengers: {
        // avenger01: {
        //   avenger: {
        //     name: 'test'
        //   },
        //   text: 'ovo je text'
        // }
      },
      input: '',
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

  showAvengerOverlay = (avenger) => {
    this.setState({
      overlayVisibility: true,
      currentAvenger: avenger
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addToMyAvengers()
    this.setState({
      overlayVisibility: false
    })
  }

  addToMyAvengers = () => {
    const { currentAvenger, input } = this.state
    const myAvengers = {...this.state.myAvengers}
    myAvengers[`avenger-${getDate()}`] = {
      avenger: currentAvenger,
      text: input
    }
    this.setState({
      myAvengers
    })
  }

  closeOverlay = () => {
    this.setState({
      overlayVisibility: false,
      currentAvenger: null
    })
  }

  render () {
    const { avengers, input, currentAvenger, myAvengers, overlayVisibility } = this.state
    console.log(this.state)
    return (
      <Fragment>
        <div className="container">
          <Header />
          <JoinAvengers />
          <section className="content">
            <AvengersList
              avengers={avengers}
              showAvengerOverlay={this.showAvengerOverlay}
            >
            </AvengersList>
            <MyAvengersList
              myAvengers={myAvengers}
            />
          </section>
          <Footer />
        </div>
        <Overlay
          overlayVisibility={overlayVisibility}
          currentAvenger={currentAvenger}
          closeOverlay={this.closeOverlay}
          input={input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    )
  }
}

export default App
