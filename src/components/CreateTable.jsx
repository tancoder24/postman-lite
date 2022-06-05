import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { makeStyles } from "@mui/styles";

// components
import AddRow from "./AddRow";

const useStyles = makeStyles({
    tableCell: {
        border: "1px solid rgba(224, 224, 224, 1)",
        borderCollapse: "collapse",
        padding: ["7px 5px", "!important"]
    }
});

const CreateTable = ({ text }) => {
  
  const classes = useStyles();
  
  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table sx={{ minWidth: "100%", border: "1px solid rgba(224, 224, 224, 1)" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} ></TableCell>
            <TableCell className={classes.tableCell} >KEY</TableCell>
            <TableCell className={classes.tableCell} >VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <AddRow />
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
