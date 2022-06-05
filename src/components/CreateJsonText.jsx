import { Typography, TextareaAutosize } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    textAreaStyle: {
        width: "100%",
        padding: 10,
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment: 'local',
        backgroundRepeat: 'no-repeat',
        paddingLeft: 35,
        paddingTop: 10,
        borderColor: '#ccc' 
    }
});

const CreateJsonText = () => {
  
  const classes = useStyles();

  return (
    <>
      <Typography mt={2} mb={2}> JSON </Typography>
      <TextareaAutosize
        className={classes.textAreaStyle}
        minRows={3}
        maxRows={5}
      />
    </>
  );
};

export default CreateJsonText;
