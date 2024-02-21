import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faMapLocationDot,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Line from "../utils/chart";
import CountryTable from "../utils/table";

export default function Dashboard() {
  return (
    <Box sx={{ py: 10, px: { md: 6, xs: 2 } }}>
      {/* Headers */}
      <Grid container columnSpacing={4} rowSpacing={4}>
        <Grid item md={3} xs={6}>
          <Paper>
            <Grid container sx={{ p: 3 }}>
              <Grid item>
                <FontAwesomeIcon
                  icon={faChartSimple}
                  style={{ fontSize: 40, padding: 15 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">300</Typography>
                <Typography variant="p">Total Available</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/*  */}
        <Grid item md={3} xs={6}>
          <Paper>
            <Grid container sx={{ p: 3 }}>
              <Grid item>
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  style={{ fontSize: 40, padding: 15 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">300</Typography>
                <Typography variant="p">Country Total</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/*  */}
        <Grid item md={3} xs={6}>
          <Paper>
            <Grid container sx={{ p: 3 }}>
              <Grid item>
                <FontAwesomeIcon
                  icon={faRefresh}
                  style={{ fontSize: 40, padding: 15 }}
                />
              </Grid>
              <Grid item my="auto">
                <Typography variant="p">Refresh Data</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/*  */}

      {/* Selectors */}
      <Box sx={{ py: 5 }}>
        <Grid container columnSpacing={4}>
          <Grid item md={4} xs={6}>
            <FormControl fullWidth>
              <InputLabel>Select Type</InputLabel>
              <Select label="Type">
                <MenuItem>Available Users</MenuItem>
                <MenuItem>Sign-Up Users</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={6}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Format</FormLabel>
              <Grid container>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="month"
                  name="radio-buttons-group"
                >
                  <Grid item md={6} xs={12}>
                    <FormControlLabel
                      value="month"
                      control={<Radio />}
                      label="Month"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <FormControlLabel
                      value="day"
                      control={<Radio />}
                      label="Day"
                    />
                  </Grid>
                </RadioGroup>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={6}>
            {/* Date Picker */}{" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <DatePicker />
                </Grid>
                <Grid item md={6} xs={12}>
                  <DatePicker />
                </Grid>
              </Grid>
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
      {/*  */}

      {/* Chart & Table */}
      <Grid container>
        <Grid item md={6} xs={12}>
          <Line />
        </Grid>
        <Grid item md={6} xs={12}>
          <CountryTable />
        </Grid>
      </Grid>
    </Box>
  );
}
