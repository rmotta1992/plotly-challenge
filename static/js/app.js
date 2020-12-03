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
  function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input value from the form
    var stock = d3.select("#selDataset").node().value;
    console.log(stock);
  
    // clear the input value
    d3.select("#selDataset").node().value = "";
  
    // Build the plot with the new stock
    buildPlot(stock);
  }
  function buildPlot(stock) {
    var trace1 = {
      x: sampleValues,
      y: otuIds,
      type : "bar",
      orientation: "h"
    };
    var barData = [trace1]

    Plotly.newPlot("bar", barData);

    };
});

//d3.select("#selDataset").on("click", handleSubmit);