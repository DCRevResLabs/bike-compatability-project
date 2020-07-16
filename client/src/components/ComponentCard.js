import React from "react";
import { useHistory } from "react-router-dom";

import {
  Avatar,
  Button,
  GridListTile,
  GridList,
  Icon,
  makeStyles,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Icons from "../assets/images";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  gridList: {
    padding: theme.spacing(2),
  },
}));

function ComponentCard(props) {
  const classes = useStyles();
  const history = useHistory();

  const {
    name,
    type,
    description,
    pointsOfContact,
    influencers,
    wikiLink,
  } = props.currentItem;

  const POCArray = () => {
    return pointsOfContact.length ? (
      pointsOfContact.map((item) => {
        return (
          <GridListTile key={item._id} cols={1}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </Button>
          </GridListTile>
        );
      })
    ) : (
      <GridListTile key="none" cols={3}>
        <Typography variant={"body1"} gutterBottom>
          There are no components that come into contact with a {name}
        </Typography>
      </GridListTile>
    );
  };

  const InfArray = () => {
    return influencers.length ? (
      influencers.map((item) => {
        return (
          <GridListTile key={item._id} cols={1}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </Button>
          </GridListTile>
        );
      })
    ) : (
      <GridListTile key="none" cols={3}>
        <Typography display="block" variant={"body1"} gutterBottom>
          There are no components that are considered to influence a {name}
        </Typography>
      </GridListTile>
    );
  };

  const handleClick = (newItem) => {
    console.log(newItem);
    const selected = props.items.find((item) => item._id === newItem._id);
    console.log(selected);
    props.setFormState(selected);
  };

  const handleBackClick = (event) => {
    props.resetFormState();
    history.push("/components");
  };

  return (
    <div className="App">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant={"h5"} gutterBottom>
            {name}
          </Typography>
          {/* <Avatar src={`Icon.${type}`} /> */}

          <Typography variant={"caption"}>{description}</Typography>
          <Divider className={classes.divider} light />
          <Typography variant={"caption"}>
            Components that contact a {name}:
          </Typography>
          <GridList
            cellHeight="auto"
            spacing={8}
            className={classes.gridList}
            cols={3}
          >
            {POCArray()}
          </GridList>
          <Divider className={classes.divider} light />
          <Typography variant={"caption"}>
            Components that influence a {name}:
          </Typography>
          <GridList
            cellHeight="auto"
            spacing={8}
            className={classes.gridList}
            cols={3}
          >
            {InfArray()}
          </GridList>
          <Divider className={classes.divider} light />
          {/* {if (wikilink !== "") {
            return (
            <Button
              target="_blank"
              variant="contained"
              href="https://en.wikipedia.org/wiki/Bicycle_handlebar"
            >
              See Component on Wikipedia
            </Button>
          ) else {
            return null} */}
        </CardContent>
      </Card>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={(event) => handleBackClick()}
      >
        Back to the database
      </Button>
    </div>
  );
}

export default ComponentCard;
