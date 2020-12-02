d3.json("../data/samples.json").then(function(data) {
  console.log(data);
  var names = data.names;
  var sampleValues = data.samples.sample_values;
  var otuIds = data.samples.otu_ids;
  var otuLabels = data.samples.otu_labels;

  var nameDrop = document.getElementById('selDataset');
  for (var i = 0; i < names.length; i++) {
      nameDrop.innerHTML = nameDrop.innerHTML +
          '<option value="' + names[i] + '">' + names[i] + '</option>';
  }
  // function show(nameDrop) {
  //   // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  //   var barChart = document.getElementById('bar');
  //   barChart.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
  //       'ID: <b>' + ele.value + '</b>';

var trace1 = {
  x: [data.samples.sample_values],
  y: [data.samples.otu_ids],
  type : "bar",
  orientation: "h"
};
var barData = [trace1]

Plotly.newPlot("bar", barData);

});