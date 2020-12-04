
function buildMetadata(sampleId){
  d3.json("../data/samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter((s) => s.id == sampleId);
    var result = resultArray[0];
    var panel = d3.select("#sample-metadata");

    panel.html("");

    Object.entries(result).forEach(([k,v]) => {
      panel.append("h6").text(`${k.toUpperCase()}: ${v}`)
    });


  });
}

function buildCharts(sampleId) {
  console.log("I'm in build charts")
}

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

  var firstSampleId = names[0];
  buildMetadata(firstSampleId)
  buildMetadata(firstSampleId)

  d3.selectAll("#selDataset").on("change", optionChanged);

  // This function is called when a dropdown menu item is selected
  function optionChanged() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    console.log(dataset)
    var data = []




  function show(nameDrop) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var userData = document.getElementById('sample-metadata');
    userData.innerHTML = dataset + '</b> </br>' +
        'ID: <b>' + otuIds + '</b>';

  };
};
});

function init() {
  
}

//d3.select("#selDataset").on("click", handleSubmit);



  // function handleSubmit() {
  //   // Prevent the page from refreshing
  //   d3.event.preventDefault();
  //   // Select the input value from the form
  //   var stock = d3.select("#selDataset").node().value;
  //   console.log(stock);
  
  //   // clear the input value
  //   d3.select("#selDataset").node().value = "";
  
  //   // Build the plot with the new stock
  //   buildPlot(stock);
  // }
  // function buildPlot(stock) {
  //   var trace1 = {
  //     x: sampleValues,
  //     y: otuIds,
  //     type : "bar",
  //     orientation: "h"
  //   };
  //   var barData = [trace1]

  //   Plotly.newPlot("bar", barData);

  //   };
  init()