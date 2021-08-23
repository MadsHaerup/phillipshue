let url = "https://192.168.8.100/api/pCWn821cvbgWo6kgR-9sE2Cy-cKFW1ijBK0zHW5s/lights/16/state";
var on = document.querySelector(".on");
var off = document.querySelector(".off");

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

  let hueOn = {
    on:true,
    sat:254, 
    bri:254,
    hue:22554
  };

  let hueOff = {
    on:false,
  };

  on.addEventListener("click", ()=>{
    fetch(url, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hueOn),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })


  off.addEventListener("click", ()=>{
    fetch(url, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hueOff),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })


