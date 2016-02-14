var list = document.querySelector("#list");
var grid = document.querySelector("#grid");

var listStyle = document.querySelector("#listStyle");
var gridStyle = document.querySelector("#gridStyle");

var isGridOn = false;
var isListOn = true;

list.addEventListener('click', function(){
  console.log("List has been clicked");
    listStyle.href ="assets/css/index1.css";
    // gridStyle.href= "nope";
    //listSytle.disabled = true;
});

grid.addEventListener('click', function(){
  console.log("Grid has been clicked");
  listStyle.href ="assets/css/index2.css";
});
