import React from 'react'
import { Switch, Route } from 'react-router'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/createPalette'
import { green, red } from 'material-ui/colors'
import routes from 'routes'

const theme = createMuiTheme({
  palette: createPalette({
    primary: green,
    accent: red,
    type: 'light',
  }),
})

export default (store, Router, routerProps) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router {...routerProps}>
        <Switch>{routes.map(route => <Route key={route.path} {...route} />)}</Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>
)
