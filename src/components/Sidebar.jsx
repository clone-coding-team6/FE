import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MdHomeFilled } from "react-icons/md";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import styled from "styled-components";

const menuItems = [
  {
    label: "홈",
    icon: <MdHomeFilled fontSize="35px" color="white" />,
    to: "/home",
  },
  {
    label: "만들기",
    icon: <TbSquareRoundedPlus fontSize="35px" color="white" />,
    to: "/create",
  },
  {
    label: "프로필",
    icon: <BiUserCircle fontSize="35px" color="white" />,
    to: "/profile",
  },
];

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <div>
            <ListItem button component={Link} to="/main">
              <Logo src="/insta_logo.png" />
            </ListItem>
          </div>

          {menuItems.map((item) => (
            <div style={{ margin: "40px 0" }} key={item.label}>
              <ListItem button component={Link} to={item.to}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;

// CSS
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000", // 배경색을 검정색으로 설정
    color: "#ffffff",
    borderRight: "1px solid #88848496;",
  },
  toolbar: theme.mixins.toolbar,
}));

const Logo = styled.img`
  width: 105px;
  height: 30px;
  margin-bottom: 40px;
`;
