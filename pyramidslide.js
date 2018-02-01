var range = document.getElementById("height");
range.addEventListener("change", function(event) {
  showRange();
  DatPyramid();
});

var selection = document.getElementById("brick");
selection.addEventListener("change", function(event) {
  DatPyramid();
});

function showRange() {
  var para = document.getElementById("current");
  para.innerHTML = document.getElementById("height").value;
}

function DatPyramid() {

    heightStr = document.getElementById("height").value;
    height = parseInt(heightStr);
    drawPyramid(height);
}

function drawPyramid(height) {

     var pyramid = document.getElementById("pyramid");
     pyramid.innerHTML = "";

     for (var row = 0; row < height; row++) {
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += " ";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += document.getElementById("brick").value;
         }

        textElem = document.createTextNode(rowStr);
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}