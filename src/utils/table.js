import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CountryTable({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  const countries = data.countries;

  return (
    <TableContainer component={Paper} sx={{ height: 350, width: "100%" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Countries</TableCell>
            <TableCell align="right">Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((countryData, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {countryData[0]} {/* Country name */}
              </TableCell>
              <TableCell align="right">{countryData[2]}</TableCell>{" "}
              {/* Count */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
