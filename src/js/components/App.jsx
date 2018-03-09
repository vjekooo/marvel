
import React, { Component, Fragment } from 'react'
import AvengersList from './AvengersList'
import Header from './Header'
import Footer from './Footer'
import MyAvengersList from './MyAvengersList'
import JoinAvengers from './JoinAvengers'
import Overlay from './Overlay'
import fetchAvengers, { avengers } from '../api'
import { getDate } from '../helpers'
import { auth, database } from '../database'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avengers: {},
      currentUser: null,
      currentAvenger: null,
      myAvengers: {},
      input: '',
      fetchingAvengers: false,
      overlayVisibility: false,
      error: null
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser: currentUser
      })
      this.usersRef = database.ref('/users')
      this.userRef = this.usersRef.child(currentUser.uid)
      this.userRef.on('value', (snapshot) => {
        this.setState({
          myAvengers: snapshot.val().myAvengers
        })
      })
    })
    fetchAvengers(avengers)
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
    this.userRef.set({
      myAvengers
    })
    this.setState({
      input: ''
    })
  }

  closeOverlay = () => {
    this.setState({
      overlayVisibility: false,
      input: '',
      currentAvenger: null
    })
  }

  render () {
    const { avengers, input, currentAvenger, currentUser, myAvengers, overlayVisibility } = this.state
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
          <Footer
            currentUser={currentUser}
          />
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
