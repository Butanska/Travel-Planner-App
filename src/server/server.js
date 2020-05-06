const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch");

// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Setup empty JS object to act as endpoint for part of the routes
clientData = [];

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

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
});

// Setup Server
const port =5000;
const server = app.listen(port, listening);
function listening(){
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

//Adding a GET route that returns the clientData object
app.get('/client', getClientData);

function getClientData (req,res) {
  res.send(clientData);
  // console.log(clientData)
};

//GeoNames API
const baseURL = 'http://api.geonames.org/searchJSON?q=';
const apiKEY = process.env.apiKEY;

//Weatherbit API
const weatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const weatherbitURLhist = 'http://api.weatherbit.io/v2.0/history/daily?'
const weatherbitKey = process.env.WEATHERBIT_API_KEY;

//Pixabay API
const pixabayURL = 'https://pixabay.com/api/?'
const pixabay_API_KEY = process.env.pixabay_API_KEY;


//Write an async function that uses fetch() to make a GET request to the Geonames API
const getCoordinates = async () => {
  let city = clientData[clientData.length-1].city;
  const response = await fetch(baseURL+city+apiKEY);
  try{
    const geonamesArray = await response.json();
    const geonamesData = geonamesArray.geonames[0];
    clientData[clientData.length-1].latitude = geonamesData.lat;
    clientData[clientData.length-1].longitude = geonamesData.lng;
    clientData[clientData.length-1].country = geonamesData.countryName;
    console.log ('Just got the coordinates from GeoNames');
    // return geonamesData
  } catch(error){
    console.log('error', error);
  }
};

//Write an async function that uses fetch() to make a GET request to the Weatherbit API
const weatherbit = async () => {
  let weatherRequest;
  if (clientData[clientData.length-1].daysLeft < 17){
    weatherRequest = `${weatherbitURL}lat=${clientData[clientData.length-1].latitude}&lon=${clientData[clientData.length-1].longitude}&key=${weatherbitKey}`;
  } else {
    //Setting the dates for the weatherRequest - arrival day and the day after and subtracting one year to get historical data
    const arrivalInputDate = clientData[clientData.length-1].arrival;
    const arrivalDay = new Date (arrivalInputDate);
    let arrivalPastYear = arrivalDay.getFullYear() - 1;
    arrivalDay.setFullYear(arrivalPastYear);
    console.log(arrivalDay);

    let arrivalM = arrivalDay.getMonth();
    let arrivalMonth = arrivalM+1;
    let startDate = arrivalDay.getFullYear()+'-0'+arrivalMonth+'-'+arrivalDay.getDate();
    console.log(startDate);

    Date.prototype.addDays = function(d) {  
    this.setTime(this.getTime() + (d*24*60*60*1000));  
    return this;  
    }; 
                  
    const endDate = function run() { 
    var a = arrivalDay; 
    arrivalDay.addDays(1); 
    return a;
    };
    
    const final = new Date(endDate());
    let m = final.getMonth();
    let month = m+1;
    let nextDate = final.getFullYear()+'-0'+month+'-'+final.getDate();
    console.log(nextDate);

    //Getting the weatherRequest URL with historical data for last year using the above date values
    weatherRequest = `${weatherbitURLhist}lat=${clientData[clientData.length-1].latitude}&lon=${clientData[clientData.length-1].longitude}&start_date=${startDate}&end_date=${nextDate}&key=${weatherbitKey}`;
    console.log(weatherRequest);
  };

  const response = await fetch(weatherRequest);
    try{
      const weatherObject = await response.json();
      console.log(JSON.stringify(weatherObject));
      clientData[clientData.length-1].temp = weatherObject.data[0].temp;
      console.log (`Weatherbit data`);
      return weatherObject
    } catch(error){
      console.log('error', error);
    }
};


//Write an async function that uses fetch() to make a GET request to the Pixabay API
const getPixabay = async () => {
  let city = clientData[clientData.length-1].city;
  pixabayReq = `${pixabayURL}key=${pixabay_API_KEY}&q=${city}&image_type=photo&pretty=true`;
  const response = await fetch(pixabayReq);
  try{
    const pixabayArray = await response.json();
    console.log(pixabayArray);
    clientData[clientData.length-1].image = pixabayArray.hits[0].webformatURL;
    console.log ('Just got the image from Pixabay');
  } catch(error){
    console.log('error', error);
  }
};

//Adding a POST route that adds incoming data to projectData
app.post('/add', addTripData);

async function addTripData(req, res){
  // const requestBody = req.body;
  const newTravelData = {};
  newTravelData.date = req.body.date;
  newTravelData.city = req.body.city;
  newTravelData.daysLeft = req.body.daysLeft;
  newTravelData.arrival = req.body.arrival;

  clientData.push(newTravelData);
  console.log ('newTravelData added to clientData');

  await getCoordinates();

  await weatherbit();

  await getPixabay();

  const dates = {};
  dates.arrival = req.body.arrival;
  dates.daysLeft = req.body.daysLeft;
  dates.country = clientData[clientData.length-1].country;
  dates.temp = clientData[clientData.length-1].temp;
  dates.image = clientData[clientData.length-1].image;

  projectData.push(dates);

  //sends the full projectData with the temp
  res.send(projectData);
  console.log(projectData);
};

//Adding a GET route that returns the projectData object
app.get('/all', getProjectData);

function getProjectData (req,res) {
  res.send(projectData);
  // console.log(projectData)
};


