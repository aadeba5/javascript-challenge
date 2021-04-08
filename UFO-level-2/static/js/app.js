// from data.js
var tableData = data;
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
// data.forEach(datum => console.log(datum))

// Initialize the button for UFO Sighting instance
tableData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date, state, shape and get the raw HTML nodes
    var inputDate = d3.select("#datetime");
    var inputState = d3.select("#state");
    var inputCity = d3.select("#city");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // console.log(inputElement);
    // Get the value property of the input date, state, shape
    var inputdateValue = inputDate.property("value");
    var inputstateValue = inputState.property("value");
    var inputcityValue = inputCity.property("value");
    var inputcountryValue = inputCountry.property("value");
    var inputshapeValue = inputShape.property("value");


    // console.log(inputValue);

    // console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => {
      return (inputdateValue === '') || (inputdateValue !== '' && sighting.datetime === inputdateValue) &&
      (inputcityValue === '') || (inputcityValue !== '' && sighting.city === inputcityValue) &&
      (inputstateValue === '') || (inputstateValue !== '' && sighting.state === inputstateValue) &&
      (inputcountryValue === '') || (inputcountryValue !== '' && sighting.country === inputcountryValue) &&
      (inputshapeValue === '') || (inputshapeValue !== '' && sighting.shape === inputshapeValue)
    });
    // console.log filter values
    // console.log(filteredData);


    filteredData.forEach(function(selections) {

    // console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        // console.log(key, value);


        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});


// ####################