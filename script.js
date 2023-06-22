// Fetch the JSON file
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Access the JSON data and manipulate the DOM
    const dataContainer = document.getElementById('data-container');
    radar_visualization(data);
    // dataContainer.textContent = JSON.stringify(data);
  })
  .catch(error => console.error(error));