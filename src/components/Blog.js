import React, { Component } from 'react'
import MainToolbar from './MainToolbar'
import {withRouter} from 'react-router'

class Blog extends Component {
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }
  render() {
    const {
      hotelname,
      picture,
      cancellation,
      general_info,
      category,
      pictures,
      rooms,
      services,
      important_info,
      features,
    } = this.props.hotel

    return (
      <div>
        <MainToolbar />
        <h1>{hotelname}</h1>
        <img src={picture} />
        <h2>{category}</h2>
      </div>
    )
  }
}

export default withRouter(Blog)