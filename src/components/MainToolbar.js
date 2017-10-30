import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import StarIcon from 'material-ui-icons/Star'
import SendIcon from 'material-ui-icons/Send'
import MailIcon from 'material-ui-icons/Mail'
import Hidden from 'material-ui/Hidden'
import DeleteIcon from 'material-ui-icons/Delete'
import ReportIcon from 'material-ui-icons/Report'
import { Container, Col } from 'reactstrap'

const styles = {
  root: {
    marginTop: 0,
    width: '100%',
    backgroundColor: '#1A237E',
    color: '#1A3372',
    boxShadow: 'none',
    height: 58,
    padding: '0px !important',
  },
  menuButton: {
    color: '#ffffff !important',
    width: 'auto !important',
    paddingLeft: '0px !important',
    paddingRight: '8px !important',
    mozOsxFontSmoothing: 'grayscale',
    webkitFontSmoothing: 'antialiased',
  },
  link: {
    textDecoration: 'none',
  },
  logo: {
    float: 'left',
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: -1,
    mozOsxFontSmoothing: 'grayscale',
    webkitFontSmoothing: 'antialiased',
  },
  logoPartOne: {
    color: '#ffffff !important',
    float: 'left',
    fontWeight: 500,
    mozOsxFontSmoothing: 'grayscale',
    webkitFontSmoothing: 'antialiased',
  },
  logoPartTwo: {
    color: '#afd1ff !important',
    float: 'left',
    fontWeight: 300,
    mozOsxFontSmoothing: 'grayscale',
    webkitFontSmoothing: 'antialiased',
  },
  flex: {
    flex: 1,
  },
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
}

class MainToolbar extends React.Component {
  state = {
    open: {
      left: false,
    },
  }
  toggleDrawer = (side, open) => {
    const drawerState = {}
    drawerState[side] = open
    this.setState({ open: drawerState })
  }

  handleLeftOpen = () => this.toggleDrawer('left', true)
  handleLeftClose = () => this.toggleDrawer('left', false)
  render() {
    const classes = this.props.classes
    const mailFolderListItems = (
      <div>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </div>
    )

    const otherMailFolderListItems = (
      <div>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="All mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItem>
      </div>
    )

    const sideList = (
      <div>
        <List className={classes.list} disablePadding>
          {mailFolderListItems}
        </List>
        <Divider />
        <List className={classes.list} disablePadding>
          {otherMailFolderListItems}
        </List>
      </div>
    )
    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="static">
          <Container style={{ padding: 0 }}>
            <Col xs="12" sm="12" md="10" lg="10">
              <Toolbar className="toolbarMain">
                <Hidden only={['md', 'lg', 'xl']}>
                  <IconButton
                    className={classes.menuButton}
                    onClick={this.handleLeftOpen}
                    color="contrast"
                    aria-label="Menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                <Drawer
                  open={this.state.open.left}
                  onRequestClose={this.handleLeftClose}
                  onClick={this.handleLeftClose}
                >
                  {sideList}
                </Drawer>

                <Link className={classes.link} to="/">
                  <div className={classes.logo}>
                    <div className="logo_part_one">Demiroğlu</div>
                    <div className="logo_part_two">Reisen</div>
                  </div>
                </Link>
              </Toolbar>
            </Col>
          </Container>
        </AppBar>
      </div>
    )
  }
}

MainToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainToolbar)
