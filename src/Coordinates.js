import fs from 'fs';
import _ from 'lodash';

// Read the JSON data from the file
const jsonData = fs.readFileSync('../data/winds15Nov2021.json', 'utf-8');

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

// Usage example
const specificTime = 1636765200000; // The specific time you want to retrieve coordinates for
const startTime = 1636761600000; // The start time
const endTime = 1636768800000; // The end time

const specificCoordinates = getCoordinatesByTime(specificTime);
const coordinatesBetweenTimes = getCoordinatesBetweenTimes(startTime, endTime);

if (specificCoordinates) {
  console.log('Specific Coordinates:', specificCoordinates);
} else {
  console.log('No coordinates found for the specific time.');
}

if (coordinatesBetweenTimes.length > 0) {
  console.log('Coordinates between times:');
  coordinatesBetweenTimes.forEach(coordinate => console.log(coordinate));
} else {
  console.log('No coordinates found between the given times.');
}
