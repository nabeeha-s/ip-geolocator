function getLocation() {
    const output = document.getElementById("output");
    output.innerHTML = "Locating...";
  
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        output.innerHTML = `
          <strong>IP Address:</strong> ${data.ip} <br>
          <strong>Latitude:</strong> ${data.latitude} <br>
          <strong>Longitude:</strong> ${data.longitude} <br>
          <strong>ISP:</strong> ${data.org} <br>
          <strong>Country:</strong> ${data.country_name} (${data.country})<br>
          <strong>Region:</strong> ${data.region} <br>
          <strong>City:</strong> ${data.city} <br>
          <strong>Postal Code:</strong> ${data.postal} <br>
          <a href="https://www.google.com/maps?q=${data.latitude},${data.longitude}" target="_blank">View on Map</a>
        `;
      })
      .catch(error => {
        output.innerHTML = "Failed to find location.";
        console.error(error);
      });
  }
  