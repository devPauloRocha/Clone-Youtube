import React from 'react';
import {
    makeStyles, AppBar, Toolbar, IconButton, Typography, Button, Drawer,
    Divider, ListItem, ListItemIcon, ListItemText, List, ListItemAvatar, Box
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    AppBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 25,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    MenuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    icons: {
        paddingRight: theme.spacing(5),
    },
    grow: {
        flexGrow: 1
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    }
}));


function Home() {
    const classes = useStyles();

    return <div className={classes.root}>
        <AppBar color='inherit' className={classes.AppBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.MenuIcon}
                    color="inherit"
                    aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img src="/images/preto.png" alt='logo' className={classes.logo} />
                <div className={classes.grow} />

                <IconButton
                    className={classes.icons}
                    color="inherit">
                    <VideoCallIcon/>
                </IconButton>
                <IconButton
                    className={classes.icons}
                    color="inherit">
                    <AppsIcon/>
                </IconButton>
                <IconButton
                    className={classes.icons}
                    color="inherit">
                    <MoreVertIcon/>
                </IconButton>
                <Button
                    variant='outlined'
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                >Fazer Login</Button>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{ <HomeIcon/> }</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Inicio'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{ <WhatshotIcon/> }</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Em Alta'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{ <SubscriptionsIcon/> }</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Inscrições'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{ <VideoLibraryIcon/> }</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Biblioteca'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{ <HistoryIcon/> }</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Histórico'} />
                    </ListItem>
                </List>
                <Divider />
                <Box p={5}>
                    
                </Box>
            </div>
        </Drawer>
    </div>;
}

export default Home;