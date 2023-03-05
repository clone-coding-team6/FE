import React from "react";
import MypageLayout from "../components/Layout/MypageLayout";
import Sidebar from "../components/Navbar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Mypage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.content}>
        <MypageLayout />
      </div>
    </div>
  );
};
export default Mypage;
