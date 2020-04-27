const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch");

// Setup empty JS object to act as endpoint for all routes
projectData = [];

var path = require('path')

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();

/**Dependencies */
const bodyParser = require ('body-parser');

/* Middleware*/
//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

// Setup Server
const port =5000;
const server = app.listen(port, listening);
function listening(){
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

//Adding a GET route that returns the projectData object
app.get('/all', getProjectData);

function getProjectData (req,res) {
  res.send(projectData)
  // console.log(projectData)
};

//Weatherbit API
const weatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const weatherbitKey = process.env.WEATHERBIT_API_KEY;

//Write an async function that uses fetch() to make a GET request to the Weatherbit API
const weatherbit = async function (longitude, latitude) {
  const weatherRequest = `${weatherbitURL}lat=${latitude}&lon=${longitude}&key=${weatherbitKey}`;
  const response = await fetch(weatherRequest);
    try{
      const weatherObject = await response.json();
      return weatherObject
    } catch(error){
      console.log('error', error);
    }
};

//Adding a POST route that adds incoming data to projectData
app.post('/add', addTripData);

function addTripData(req, res){
  // const requestBody = req.body;
  const newTravelData = {};
  newTravelData.country = req.body.country;
  newTravelData.date = req.body.date;
  newTravelData.userResponse = req.body.userResponse;
  newTravelData.daysLeft = req.body.daysLeft;
  newTravelData.longitude = req.body.longitude;
  newTravelData.latitude = req.body.latitude;

  // Call your async GET request to the Weatherbit API with parameters
  weatherbit(newTravelData.longitude, newTravelData.latitude)
    .then(function (weatherbitData) {
      // return (weatherbitData);
      newTravelData.temp = weatherbitData.data[0].temp;
      // projectData.push(newTravelData)
      // res.send(projectData);
    });
  
  projectData.push(newTravelData)
  res.send(projectData);
  console.log(projectData);

  // projectData.push(req.body);
  // res.send(projectData); 
  // console.log(projectData)
};