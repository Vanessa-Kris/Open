import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faMapLocationDot,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import Line from "../utils/chart";
import CountryTable from "../utils/table";
// import Map from "../utils/map";
import UserTable from "../utils/dataTable";

export default function Dashboard() {
  const baseUrl = process.env.REACT_APP_API_URL;

  // Set default start date and end date to current date
  const currentDate = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
  const [type, setType] = useState("available");
  const [format, setFormat] = useState("month");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [startDate, endDate, type, format]);

  const fetchData = () => {
    setLoading(true);
    let URL = `${baseUrl}/users?start=${startDate}&end=${endDate}&type=${type}&format=${format}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("fetched data", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    console.log(URL); // Just for demonstration
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleStartDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setStartDate(formattedDate);
  };

  const handleEndDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setEndDate(formattedDate);
  };
  // console.log("countries", data.countries);
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
                <Typography variant="h4">{data.total_users}</Typography>
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
                <Typography variant="h4">{data.total_countries}</Typography>
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
              <Select value={type} onChange={handleTypeChange} label="Type">
                <MenuItem value="available">Available Users</MenuItem>
                <MenuItem value="signup">Sign-Up Users</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={6}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Format</FormLabel>
              <Grid container>
                <RadioGroup
                  value={format}
                  onChange={handleFormatChange}
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
            <Box>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/*  */}

      {/* Chart & Table */}
      <Grid container>
        <Grid item md={6} xs={12} sx={{ width: "100%" }}>
          <Line data={data} />
        </Grid>
        <Grid item md={6} xs={12}>
          <UserTable data={data} />
        </Grid>
      </Grid>

      {/* Map & Table */}
      <Grid container sx={{ mt: 4 }}>
        <Grid item md={6} xs={12}>
          {/* <Map /> */}
        </Grid>
        <Grid item md={6} xs={12}>
          <CountryTable />
        </Grid>
      </Grid>
    </Box>
  );
}
