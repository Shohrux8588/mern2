import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createTodo, updateTodo } from "../../actions/todos";

const Form = ({ currentId, setCurrentId }) => {
    const [todoData, setTodoData] = useState({
        title: "", message: ""
    });
    const todo = useSelector(state => currentId ? state.todos.find(p => p._id === currentId) : null);
   
    const dispatch = useDispatch();
    const classes = useStyles();




    useEffect(() => {
        if (todo) setTodoData(todo);
    }, [todo]);

    const handleClick = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateTodo(currentId, todoData));
        } else {
            dispatch(createTodo(todoData));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setTodoData({ title: "", message: "" });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleClick}>
                <Typography variant="h6">{currentId ? "Edit" : "Create"} a Todo</Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={todoData.title}
                    onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={todoData.message}
                    onChange={(e) => setTodoData({ ...todoData, message: e.target.value })}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default Form;
