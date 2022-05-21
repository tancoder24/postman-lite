import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// components
import Header from "./Header";
import Form from "./Form";
import SelectTab from "./SelectTab";

const useStyles = makeStyles({
  component: {
    width: "60%",
    margin: "20px auto 0 auto"
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Form />
        <SelectTab />
      </Box>
      
    </>
  );
};

export default Home;
