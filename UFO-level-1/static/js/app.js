// from data.js
var tableData = data; 

// YOUR CODE HERE!
// Assign the data from `data.js` to a descriptive variable
var tbody = d3.select("tbody");

// var tbody = d3.select("tbody")
data.forEach(datum => console.log(datum))



// // Select the button
var button = d3.select("#filter-btn");
console.log(button);

// // Select the form
var form = d3.select("form");
console.log(form);

// // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// // Complete the event handler function for the form
function runEnter() {

//   // Prevent the page from refreshing
d3.event.preventDefault();
}
  

// // from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach(datum => console.log(datum))

// Initialize the button instance
var button = d3.select("#filter-btn");

// Initialize the form instance
var form = d3.select("#form");

// Create Event handlers
button.on("click", runEvent);
form.on("submit", runEvent);

// Function to create and append data to the table
function createTable(filteredData){
    
    // Select the table element by id
    var table = d3.select("#ufo-table");

    // Select the tbody element by id 
    var tbody = table.select("tbody");
    var trow;

    // Sets the table to it's default blank setting for population
    tbody.html("");

    // Loop through each object and append the data to the table
    filteredData.forEach(function(dataObject){
        // Create new row for each object
        trow = tbody.append("tr");
        trow.append("td").text(dataObject.datetime);
        trow.append("td").text(dataObject.city);
        trow.append("td").text(dataObject.state);
        trow.append("td").text(dataObject.country);
        trow.append("td").text(dataObject.shape);
        trow.append("td").text(dataObject.durationMinutes);
        trow.append("td").text(dataObject.comments);

    });

};

// Event Handler Function
function runEvent(){

    // Prevent Page from Refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the input value (date) from the input element
    var inputData = inputElement.property("value");

    // Filter the data.js by the input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputData);

    // Call the createTable function with the 
    // filteredData as the parameter
    createTable(filteredData);
};