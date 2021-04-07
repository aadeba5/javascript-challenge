// from data.js
// var tableData = data;
// console.log(tableData);

// // Get a reference to the table body
// var tbody = d3.select("tbody");
// data.forEach(datum => console.log(datum))

// // Initialize the button for UFO Sighting instance
// tableData.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");

//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(ufoSighting).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


// // Select the button
// var button = d3.select("#filter-btn");
// button.on("click", function() {

//     tbody.html("");

//     // Select the input date, state, shape and get the raw HTML nodes
//     var inputElement = d3.select("#input");
//     // Get the value property of the input date, state, shape
//     var inputValue = inputElement.property("value");
//     console.log(inputValue);
//     // Filter Data with datetime equal to input value
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
//                                                     sighting.city === inputValue ||
//                                                     sighting.state === inputValue ||
//                                                     sighting.country === inputValue ||
//                                                     sighting.shape === inputValue);
//     // console.log filter values
//     console.log(filteredData);


//     filteredData.forEach(function(selections) {

//     console.log(selections);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");
//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(selections).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// });


// ####################

var tableData = data;

// YOUR CODE HERE!
// select the filter button/form/tablebody
var button = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn")
var form = d3.select("#form-control");
var tbody = d3.select("tbody");
 //Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
clearButton.on("click", fillTable);
function fillTable() {
  tableData.forEach((rowData) => { 
    let row = tbody.append("tr");
       Object.values(rowData).forEach((value) => {
         let cell = row.append("td");
         cell.text(value);
           });
         })
       };


//Complete event handler
function runEnter(){
    //prevent page from refreshing
    d3.event.preventDefault();
    //select input from datetime entry
    var inputdate = d3.select("#datetime");
    var inputcity = d3.select("#city");
    var inputstate = d3.select("#state");
    var inputcountry = d3.select("#country");
    var inputshape = d3.select("#shape");
    //get the value of the input
    var dateValue = inputdate.property("value");
    var cityValue = inputcity.property("value");
    var stateValue = inputstate.property("value");
    var countryValue = inputcountry.property("value");
    var shapeValue = inputshape.property("value");

    //filter data
    var filteredData = tableData.filter(tableData => tableData.datetime === dateValue); 
    var cityData = tableData.filter(tableData => tableData.city === cityValue); 
    var stateData = tableData.filter(tableData => tableData.state === stateValue);
    var countryData = tableData.filter(tableData => tableData.country === countryValue);
    var shapeData = tableData.filter(tableData => tableData.shape === shapeValue);

    //clear table for next filter
    tbody.html("");
    //console.log(filteredData);
    //put filtered data into the table  
    filteredData.forEach((rowData) => {

      let row = tbody.append("tr");
      Object.values(rowData).forEach((value) => {
        let cell = row.append("td");
        cell.text(value);
      });
    })
    cityData.forEach((rowData) => {

      let row = tbody.append("tr");
          Object.values(rowData).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
          });
        })
    stateData.forEach((rowData) => {

      let row = tbody.append("tr");
          Object.values(rowData).forEach((value) => {
              let cell = row.append("td");
              cell.text(value);
            });
          })
    countryData.forEach((rowData) => {

      let row = tbody.append("tr");
          Object.values(rowData).forEach((value) => {
                let cell = row.append("td");
                cell.text(value);
              });
            })
    shapeData.forEach((rowData) => {

      let row = tbody.append("tr");
          Object.values(rowData).forEach((value) => {
                  let cell = row.append("td");
                  cell.text(value);
                });
              })
            };
fillTable();