// import React from "react";
// import AnyChart from "anychart-react";
// import anychart from "anychart";

// const CountryMap = ({ data, isLoading }) => {
//   console.log("CountryMap component rendering...");

//   if (isLoading) {
//     console.log("Data is loading...");
//     return <div>Loading...</div>; // Render a loading indicator if data is fetching
//   }

//   if (!data || Object.keys(data).length === 0) {
//     console.log("No data available.");
//     return null; // Render nothing if there's no data
//   }

//   const countries = data.countries;
//   console.log("Countries data:", countries);

//   // Convert countries data to match the format required by AnyChart
//   let mapData = countries.map((countryData) => ({
//     id: countryData[1],
//     value: countryData[2],
//   }));
//   console.log("Map data for AnyChart:", mapData);

//   // Create AnyChart data set using anychart.data.set
//   let dataSet = anychart.data.set(mapData);

//   return (
//     <AnyChart
//       width={800}
//       height={600}
//       type="choropleth"
//       data={dataSet}
//       title="Map example"
//       geoData="anychart.maps.world"
//     />
//   );
// };

// export default CountryMap;
