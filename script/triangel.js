// triangle area calculation

function calculateTriangleArea() {
  // triangle base (b)
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseText);
  // console.log(triangleBase);
  // triangle base (h)
  const triangleheightInput = document.getElementById('triangel-height');
  const triangleheightText = triangleheightInput.value;
  const triangleheight = parseFloat(triangleheightText);
  // console.log(triangleheight);
  // calculate triangle area
  const area = 0.5 * triangleBase * triangleheight;
  console.log(area);
  // display triangle area
  const triangleAreaspan = document.getElementById('triangel-area');
  triangleAreaspan.innerText = area;
}
// Rectangle area calculation
function calculateRectangleArea() {
  // triangle width
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthText);
  // console.log(rectangleWidth);
  // triangle length
  const rectangleLenghtArea = document.getElementById('rectangle-length');
  const rectangleLenghtText = rectangleLenghtArea.value;
  const rectangleLenght = parseFloat(rectangleLenghtText);
  // console.log(rectan
  const Area = rectangleWidth * rectangleLenght;
  console.log(Area);
  // display rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = Area;
}
