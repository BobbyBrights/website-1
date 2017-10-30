import React, { Component } from 'react'
import App from './App'

export default class Main extends Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return(
            <App {...this.props} />
        )
    }
}

