import React from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { deleteTodo, completeTodo } from "../../../actions/todos";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Todo = ({ todo, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>

            <div className={classes.overlay}>
                <Typography style={{ color: "black" }} variant="body2">
                    {moment(todo.createdAt).fromNow()}
                </Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{ color: "black" }} size="small" onClick={() => setCurrentId(todo._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>

            <CardContent>
                <Typography className={classes.title} variant="h4" gutterBottom>
                    {todo.title}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    {todo.message}
                </Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(completeTodo(todo._id))}>
                    {todo.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteTodo(todo._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Todo;