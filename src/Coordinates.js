import fs from 'fs';

// Read the JSON data from the file
const jsonData = fs.readFileSync('../data/winds15Nov2021.json', 'utf-8');

// Parse the JSON data
const data = JSON.parse(jsonData);

// Function to retrieve coordinates based on Time
function getCoordinatesByTime(time) {
  // Iterate over the features
  for (const feature of data.features) {
    // Check if the feature's Time matches the given time
    if (feature.properties.Time === time) {
      // Return the coordinates
      return feature.geometry.coordinates;
    }
  }

  // If no matching time is found
  return null;
}

// Function to retrieve coordinates between two times
function getCoordinatesBetweenTimes(startTime, endTime) {
  const coordinates = [];

  // Iterate over the features
  for (const feature of data.features) {
    const featureTime = feature.properties.Time;

    // Check if the feature's Time is between the given start and end times
    if (featureTime >= startTime && featureTime <= endTime) {
      // Add the coordinates to the array
      coordinates.push(feature.geometry.coordinates);
    }
  }

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
