import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  select: {
    width: 150,
    height: 40,
  },
  textfield: {
    width: "100%",
    background: "#F6F6F6",
  },
  button: {
    width: 100,
    height: 40,
    marginLeft: [5, "!important"],
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Select
        className={classes.select}
        //value=""
        label="POST"
        //onChange=""
      >
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"GET"}>GET</MenuItem>
      </Select>
      <TextField className={classes.textfield} size="small" />
      <Button className={classes.button} variant="contained">
        SEND
      </Button>
    </Box>
  );
};

export default Form;
