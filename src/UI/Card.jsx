import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { BsCircleSquare } from "react-icons/bs";
import "../UI/card.css";
const useStyles = makeStyles({
  root: {
    minWidth: 260,
    width: "40rem",
    height: 250,
    backgroundColor: "#B6B9B2",
    marginBottom: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.2rem",
    color: "#1a1820",
  },
  pos: {
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default function SimpleCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={data.id}>
      <CardContent>
        <div className="topDetails">
          <span className="cardIcon">
            <BsCircleSquare size="3rem" color="#ed814a" />
          </span>
          <div className="titles">
            <Typography
              variant="h5"
              component="h2"
              style={{ marginBottom: "0.5rem", color: "#1a1820" }}
            >
              {data.Event}
            </Typography>{" "}
            <Typography
              className={classes.title}
              component="h4"
              variant="h6"
              color="textSecondary"
            >
              {data.school}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {data.class}
            </Typography>
          </div>
        </div>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          style={{ fontWeight: "bold" }}
        >
          <span> Start: </span>
          {data.start}
          <br />
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          style={{ fontWeight: "bold" }}
        >
          <span>End: </span>
          {data.end}
          <br />
        </Typography>
        <Typography
          color="textSecondary"
          style={{ marginTop: "0.5rem", color: "#1a1820" }}
        >
          {data.EventDesc}
        </Typography>{" "}
      </CardContent>
    </Card>
  );
}
