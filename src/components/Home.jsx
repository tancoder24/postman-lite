import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// components
import Header from "./Header";
import Form from "./Form";

const useStyles = makeStyles({
  component: {
    width: "60%",
    margin: "20px auto 0",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Form />
      </Box>
    </>
  );
};

export default Home;
