function formSubmit(){

  /* Global Variables */

  //GeoNames API
  const baseURL = 'http://api.geonames.org/searchJSON?q='
  const apiKEY = '&username=romib';

  //Path to location where data is added 
  //(added 'http://localhost:5000' to the path)
  const addLocationPath = 'http://localhost:5000/add'

  // Create a new date instance dynamically with JS
  let today = new Date();
  let m = today.getMonth();
  let month = m+1;
  let newDate = today.getDate()+'.'+month+'.'+ today.getFullYear();

  //Write an async function that uses fetch() to make a GET request to the Geonames API
  const getCoordinates = async (baseURL, city, key)=>{
    const response = await fetch(baseURL+city+key);
    try{
      const geonamesArray = await response.json();
      console.log(geonamesArray);
      // const country = geonamesArray.geonames[0].countryName;
      const geonamesData = geonamesArray.geonames[0];
      return geonamesData
    } catch(error){
      console.log('error', error);
    }
  }

  //Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked
  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){
    // Select the value of the user response to include in POST
    const arrivalDay = document.getElementById('arrivalDate').value;
    const entry = new Date(arrivalDay);
    const time = entry.getTime();
    const inputToday = (new Date()).getTime();
    const differenceMiliSec = Math.abs(time - inputToday);
    const difference = Math.ceil(differenceMiliSec/(1000*60*60*24));

    // Call your async GET request with parameters
    getCoordinates(baseURL, document.getElementById('city').value, apiKEY)
      .then(function(geonamesData){
        postData(addLocationPath, {
          country: geonamesData.countryName, 
          date: newDate, 
          userResponse: arrivalDay, 
          daysLeft: difference,
          longitude: geonamesData.lng,
          latitude: geonamesData.lat
        })
        //Update UI
        updateUI();
      })
  };

  //Write an async function to make a POST request to add the API data, user input and date
  const postData = async ( url = '', data = {})=>{
    const response = await fetch(url = 'http://localhost:5000/add', {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),       
  });
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
  };

  //Dynamically Update the UI
  const updateUI = async()=>{
    //Retrieve data from the app endpoint (added 'http://localhost:5000' to the path)
    const request = await fetch('http://localhost:5000/all')
    try{
      const allData = await request.json();
      console.log(allData);
      const logsNumber = allData.length;
      const lastEntry = allData[logsNumber-1];
      const city = document.getElementById('city').value;
      document.getElementById('date').innerHTML = 'Today is '+ lastEntry.date;
      document.getElementById('country').innerHTML = 'You are going to '+city+', '+lastEntry.country;
      document.getElementById('content').innerHTML = 'Your departure date is '+lastEntry.userResponse;
      document.getElementById('countdown').innerHTML = 'There are '+lastEntry.daysLeft+' days left until your trip';
      document.getElementById('temp').innerHTML = 'The average temperature in the next 16 days is expected to be '+lastEntry.temp+'&deg;C';

    }catch(error){
      console.log('error', error);
    };
  }

}

export { formSubmit }

