//Create the traces

var trace1 = {
  x: data.map(row => row.State),
  y: data.map(row => row.Food_secure_individuals),
  text: data.map(row => row.Food_secure_individuals),
  name: "Food Security",
  marker: {color: '#23b7e5'},
  type: "bar"
};

var trace2 = {
  x: data.map(row => row.State),
  y: data.map(row => row.Food_insecure_individuals),
  text: data.map(row => row.Food_insecure_individuals),
  name: "Food Insecurity",
  marker: {color: '000000'},
  type: "bar"
};


// Create the data array for the plot
var data = [trace1, trace2];

var layout = {barmode: 'stack'};

// Plot the chart to a div tag with id "plot"

Plotly.newPlot("plot", data, layout);