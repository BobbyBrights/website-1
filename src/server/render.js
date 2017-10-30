import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router'
import { matchPath } from 'react-router-dom'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import preset from 'jss-preset-default'
// import rtl from 'jss-rtl'; // in-case you're supporting rtl
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import { green, red } from 'material-ui/colors'

import routes from 'routes'
import createStore from 'store'
import page from 'server/page'

import App from 'components/App'

export default stats => async (req, res) => {
  try {
    const store = createStore()
    const sheet = new ServerStyleSheet()

    const context = {}
    const promises = []

    routes.some(route => {
      const match = matchPath(req.url, route)
      if (match && route.load) {
        promises.push(route.load(store))
      }
      return match
    })

    await Promise.all(promises)
    const sheetsRegistry = new SheetsRegistry()
    const theme = createMuiTheme({
      palette: {
        primary: green,
        accent: red,
        type: 'light',
      },
    })

    const jss = create(preset())
    jss.options.createGenerateClassName = createGenerateClassName

    const root = App(
      store,
      StaticRouter,
      { location: req.url, context },
        JssProvider,
        { registry: sheetsRegistry },
        MuiThemeProvider,
        {
            theme,
            jss,
        },
    )
    const html = __DEV__ ? '' : renderToString(sheet.collectStyles(root))
    const styles = __DEV__ ? '' : sheet.getStyleTags()

    res.end(page({ styles, html, state: store.getState(), main: stats.main || 'bundle.js' }))
  } catch (err) {
    res.status(500).send(err.stack)
  }
}
