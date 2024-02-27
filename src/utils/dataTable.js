import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserTable({ data, year = "2022" }) {
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  const months = data[year].map((item) => item[0]);
  const counts = data[year].map((item) => item[1]);

  return (
    <TableContainer component={Paper} sx={{ height: 350, width: "100%" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Months</TableCell>
            <TableCell align="right">Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {months.map((month, index) => (
            <TableRow key={month}>
              <TableCell component="th" scope="row">
                {month}
              </TableCell>
              <TableCell align="right">{counts[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
