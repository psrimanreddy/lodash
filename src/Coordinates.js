import fs from 'fs';
import _ from 'lodash';

// Specify the list of JSON files
const jsonFiles = [
  'AqmAverage15Nov2021.json',
  'fires15Nov2021.json',
  'fires17Jan2022.json',
  'fires24Feb2022.json',
  'winds17Jan2022.json',
  'winds24Feb2022.json'
];

// Benchmark the code for each JSON file
jsonFiles.forEach(jsonFile => {
  console.log(`Benchmarking file: ${jsonFile}`);

  // Read the JSON data from the file
  const jsonData = fs.readFileSync(`../data/${jsonFile}`, 'utf-8');

  // Parse the JSON data
  const data = JSON.parse(jsonData);

  // Function to retrieve coordinates based on Time
  function getCoordinatesByTime(time) {
    const feature = _.find(data.features, { 'properties': { 'Time': time } });
    return feature ? feature.geometry.coordinates : null;
  }

  // Function to retrieve coordinates between two times
  function getCoordinatesBetweenTimes(startTime, endTime) {
    const coordinates = _.chain(data.features)
      .filter(feature => {
        const featureTime = feature.properties.Time;
        return featureTime >= startTime && featureTime <= endTime;
      })
      .map(feature => feature.geometry.coordinates)
      .value();

    return coordinates;
  }

  // Benchmark the getCoordinatesByTime function
  const specificTime = 1636765200000; // The specific time you want to retrieve coordinates for
  const startTime1 = performance.now();
  const specificCoordinates = getCoordinatesByTime(specificTime);
  const endTime1 = performance.now();

  if (specificCoordinates) {
    console.log('Specific Coordinates:', specificCoordinates);
  } else {
    console.log('No coordinates found for the specific time.');
  }

  console.log('Execution time for getCoordinatesByTime:', endTime1 - startTime1, 'milliseconds');

  // Benchmark the getCoordinatesBetweenTimes function
  const startTime2 = performance.now();
  const startTime = 1636761600000; // The start time
  const endTime = 1636768800000; // The end time
  const coordinatesBetweenTimes = getCoordinatesBetweenTimes(startTime, endTime);
  const endTime2 = performance.now();

  if (coordinatesBetweenTimes.length > 0) {
    console.log('Coordinates between times:');
    coordinatesBetweenTimes.forEach(coordinate => console.log(coordinate));
  } else {
    console.log('No coordinates found between the given times.');
  }

  console.log('Execution time for getCoordinatesBetweenTimes:', endTime2 - startTime2, 'milliseconds');
  console.log('----------------------------------------------');
});
