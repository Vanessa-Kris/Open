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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { DatePicker } from "@mui/lab";

export default function Dashboard() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
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
                <Typography variant="p">Total Avilable</Typography>
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
                <Typography variant="p">Total Avilable</Typography>
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
                  <Grid item>
                    <FormControlLabel
                      value="month"
                      control={<Radio />}
                      label="Month"
                    />
                  </Grid>
                  <Grid item>
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
            {/* Date Picker */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
