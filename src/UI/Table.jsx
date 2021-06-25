import React from "react";
import "./table.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    backgroundColor: "white",
  },
  tableHead: {
    width: "100%",
    backgroundColor: "#1A1820",
  },
  tableCell: {
    padding: "2.5rem 1rem",
    color: "#B6B9B2",
    fontFamily: "curasive",
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  tableBody: {
    padding: "2rem 1rem",
  },
  tableCellBody: {
    padding: "1.6rem 1rem",
    fontFamily: "curasive",
    fontSize: "1.1rem",
    fontWeight: 500,
  },
});

function TableComponent({ columns, rows }) {
  const classes = useStyles();
  return (
    <>
      <TableContainer style={{ borderRadius: "8px" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              {columns.map((column) => (
                <TableCell className={classes.tableCell}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {rows.map((row) => (
              <StyledTableRow key={row.school}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableCellBody}
                >
                  {row.school}
                </TableCell>
                <TableCell className={classes.tableCellBody}>
                  {row.classes}
                </TableCell>
                <TableCell className={classes.tableCellBody}>
                  {row.campus}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableComponent;
