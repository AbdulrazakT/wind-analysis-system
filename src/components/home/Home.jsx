import { useState } from "react";

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { deepOrange } from "@material-ui/core/colors";

// icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import HistoryIcon from "@material-ui/icons/History";

// import pages
import HomePage from "./pages/homepage/HomePage";
import Workspace from "./pages/workspace/Workspace";
import SimplePopover from "./pages/workspace/Popover";
import Results from "./pages/results/Results";
import ChangePassword from "./pages/password/ChangePassword";
import History from "./pages/history/History";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    textAlign: "center",
  },

  toolbarAlign: {
    display: "flex",
    justifyContent: "space-between",
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },

  toolbarMenu: {
    textAlign: "right",
  },
  container: {
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

function Home(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Local Routes
  const [localRoute, setLocalRoute] = useState("home");

  // Local Routes Handler
  const changeLocalRoute = (route) => {
    setLocalRoute(route);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <div></div>
        <ListItem
          button
          onClick={() => {
            changeLocalRoute("home");
          }}
        >
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            changeLocalRoute("workspace");
          }}
        >
          <ListItemIcon>
            <AssessmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Workspace"} />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            changeLocalRoute("results");
          }}
        >
          <ListItemIcon>
            <LibraryBooksOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Results"} />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            changeLocalRoute("history");
          }}
        >
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={"History"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarAlign}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Wind Data Analytics & Visualization Tool
          </Typography>
          <SimplePopover
            name={props.name}
            changeLocalRoute={changeLocalRoute}
            changeRoute={props.changeRoute}
          />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {localRoute === "home" ? (
          <HomePage user={props.user} />
        ) : localRoute === "workspace" ? (
          <Workspace />
        ) : localRoute === "password" ? (
          <ChangePassword />
        ) : localRoute === "history" ? (
          <History />
        ) : (
          <Results />
        )}
      </main>
    </div>
  );
}

export default Home;
