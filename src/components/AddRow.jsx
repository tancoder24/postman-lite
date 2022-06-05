import { TableRow, TableCell } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tableCell: {
    border: "1px solid rgba(224, 224, 224, 1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"]
}
});

const AddRow = () => {
    
    const classes = useStyles();

    return (
      <TableRow>
        <TableCell className={classes.tableCell} >1</TableCell>
        <TableCell className={classes.tableCell} >2</TableCell>
        <TableCell className={classes.tableCell} >3</TableCell>
      </TableRow>
    )
};

export default AddRow;