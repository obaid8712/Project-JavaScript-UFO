// from data.js
var tableData = data;

var tbody = d3.select("tbody");


// YOUR CODE HERE!
//table.attr("class","table table-striped");
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

button.on("click",function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    if ("5" == 5) {
      console.log("true");
    }
    
    console.log(filteredData);
    // CLEAR THE OLD TABLE AND ADD FILTERED DATA

    //var tbody = d3.select("tbody");
    d3.select("tbody")
    .html("");
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

});


