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

          <div style={{ margin: "40px 0" }}>
            <ListItem button component={Link} to="/home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="홈" />
            </ListItem>
          </div>

          <div style={{ margin: "40px 0" }}>
            <ListItem button component={Link} to="/create">
              <ListItemIcon>
                <PulsIcon />
              </ListItemIcon>
              <ListItemText primary="만들기" />
            </ListItem>
          </div>

          <div style={{ margin: "40px 0" }}>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon>
                <ProfileIcon />
              </ListItemIcon>
              <ListItemText primary="프로필" />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;

//CSS
const drawerWidth = 200;
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
  },
  toolbar: theme.mixins.toolbar,
}));

const HomeIcon = styled(MdHomeFilled)`
  font-size: 37px;
  color: #ffffff;
`;

const PulsIcon = styled(TbSquareRoundedPlus)`
  font-size: 40px;
  color: #ffffff;
`;

const ProfileIcon = styled(BiUserCircle)`
  font-size: 40px;
  color: #ffffff;
`;

const Logo = styled.img`
  width: 105px;
  height: 30px;

  margin-bottom: 40px;
`;
