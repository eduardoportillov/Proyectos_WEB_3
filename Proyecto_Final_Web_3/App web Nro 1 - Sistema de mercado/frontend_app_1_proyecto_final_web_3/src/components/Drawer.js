import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SalirIcon from '@material-ui/icons/Close';
import Person from '@material-ui/icons/Person';
import Model from '../Model';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function DrawerL(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getAdminFunction = () => {
        var usuario = Model.Usuario.getUser();
        if (!usuario) return;
        console.log(usuario)
        if (usuario.roles != "mercadoadmin" && usuario.roles != "superadmin") {
            return;
        }
        return <>
            <Link to={"/admin/empresa"}>
                <ListItem button  >
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary={"Empresas"} />
                </ListItem>
            </Link>
            <Link to={"/admin/pedido"}>
                <ListItem button  >
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary={"Pedidos"} />
                </ListItem>
            </Link>
            <hr />
        </>
    }
    const getLogOut = () => {
        if (!Model.Usuario.getToken()) {
            return <Link to={"/login"}>
                <ListItem button  >
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary={"SignIn"} />
                </ListItem>
            </Link>

        }
        return <>
            <Link to={"/history"}>
                <ListItem button >
                    <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                    <ListItemText primary={"history"} />
                </ListItem>
            </Link>
            <ListItem button >
                <ListItemIcon><SalirIcon /></ListItemIcon>
                <ListItemText primary={"SignOut"} onClick={() => {
                    Model.Usuario.signout()
                }} />
            </ListItem>
        </>
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />

                <List>
                    <Link to={"/"}>
                        <ListItem button  >
                            <ListItemIcon><Person /></ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                    </Link>
                    <hr />
                    {getAdminFunction()}
                    {getLogOut()}

                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {props.children}
            </main>
        </div>
    );
}
