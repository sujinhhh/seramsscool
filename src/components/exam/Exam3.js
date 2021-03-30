import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

function Exam3() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswer(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>정답을 고르시오</InputLabel>
        <Select
          labelId="select"
          id="question"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={"Do"}>Do</MenuItem>
          <MenuItem value={"Does"}>Does</MenuItem>
          <MenuItem value={"Did"}>Did</MenuItem>
          <MenuItem value={"Don't"}>Don't</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h1" color="primary" align="center">
        {value} I say ?
      </Typography>
      <Button variant="contained" color="primary" onSubmit={handleSubmit}>
        제출
      </Button>
    </div>
  );
}

export default Exam3;
