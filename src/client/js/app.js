function formSubmit(){

  //Path to location where data is added 
  const addLocationPath = 'http://localhost:5000/add'

  // Create a new date instance dynamically with JS
  let today = new Date();
  let m = today.getMonth();
  let month = m+1;
  let newDate = today.getDate()+'.'+month+'.'+ today.getFullYear();

  //Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked
  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){
    e.preventDefault();
    // Select the value of the user response to include in POST
    const arrivalDay = document.getElementById('arrivalDate').value;
    const entry = new Date(arrivalDay);
    const time = entry.getTime();
    const inputToday = (new Date()).getTime();
    const differenceMiliSec = Math.abs(time - inputToday);
    const difference = Math.ceil(differenceMiliSec/(1000*60*60*24));
    const city = document.getElementById('city').value;

    postData(addLocationPath, {
      date: newDate, 
      arrival: arrivalDay, 
      daysLeft: difference,
      city: city
    });

  };

  //Write an async function to make a POST request to add the API data, user input and date
  const postData = async ( url = '', data = {})=>{
    const response = await fetch(url,
    // url = 'http://localhost:5000/add',
    {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),       
  });
    try {
      const data = await fetch('http://localhost:5000/all')
      try {
        const newData = await data.json();
        updateUI();
        return newData;
      } catch (error) {
        console.log("error 1", error);
      }
    }catch(error) {
    console.log("error 1", error);
    }
  };

  //Dynamically Update the UI
  const updateUI = async()=>{
    //Retrieve data from the app endpoint
    const request = await fetch('http://localhost:5000/all')

    try{
      const allData = await request.json();
      console.log(allData);
      const logsNumber = allData.length;
      const lastEntry = allData[logsNumber-1];
      const city = document.getElementById('city').value;

      document.getElementById('date').innerHTML = 'Today is '+ newDate;
      // lastEntry.date;

      document.getElementById('country').innerHTML = 'You are going to '+city+', '+lastEntry.country;

      document.getElementById('content').innerHTML = 'Your arrival date is '+lastEntry.arrival;

      document.getElementById('countdown').innerHTML = 'There are '+lastEntry.daysLeft+' days left until your trip';

      document.getElementById('temp').innerHTML = 'The typical weather for then is '+lastEntry.temp+'&deg;C';
    }
    catch(error){
      console.log('error', error);
    };
  }

}

export { formSubmit }

