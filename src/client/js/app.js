function formSubmit(){

  /* Global Variables */
  const baseURL = 'http://api.geonames.org/searchJSON?q='
  
  const apiKEY = '&username=romib';

  //added 'http://localhost:5000' to the path
  const addLocationPath = 'http://localhost:5000/add'

  // Create a new date instance dynamically with JS
  let d = new Date();
  let m = d.getMonth();
  let month = m+1;
  let newDate = d.getDate()+'.'+month+'.'+ d.getFullYear();

  //Write an async function that uses fetch() to make a GET request to the Geonames API
  const getWeather = async (baseURL, city, key)=>{
    const response = await fetch(baseURL+city+key);
    try{
      const geonamesData = await response.json();
      console.log(geonamesData);
      const temperature = geonamesData[1].countryName;
      return temperature
    } catch(error){
      console.log('error', error);
    }
  }

  //Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked
  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){
    // Select the value of the user response to include in POST
    const feeling = document.getElementById('feelings').value;

    // Call your async GET request with parameters
    getWeather(baseURL, document.getElementById('city').value, apiKEY)
      .then(function(temperature){
        postData(addLocationPath, {temperature: temperature, date: newDate, userResponse: feeling})
        //Update UI
        updateUI();
      })
  };

  //Write an async function to make a POST request to add the API data, user input and date
  const postData = async ( url = '', data = {})=>{
    // const response = await fetch(url, {
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
      document.getElementById('date').innerHTML = 'Date: '+ lastEntry.date;
      document.getElementById('temp').innerHTML = 'Temperature: '+lastEntry.temperature + '&deg;C';
      document.getElementById('content').innerHTML = 'You are feeling '+lastEntry.userResponse;
    }catch(error){
      console.log('error', error);
    };
  }
}

export { formSubmit }

