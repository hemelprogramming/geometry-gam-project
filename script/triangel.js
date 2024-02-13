// triangle area calculation

function calculateTriangleArea() {
  // triangle base (b)
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseText);
  // console.log(triangleBase);
  // triangle base (h)
  const triangleHeightInput = document.getElementById('triangel-height');
  const triangleHeightText = triangleHeightInput.value;
  const triangleHeight = parseFloat(triangleHeightText);
  // console.log(triangleheight);
  // calculate triangle area
  const area = 0.5 * triangleBase * triangleHeight;
  // console.log(area);
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
  // console.log(Area);
  // display rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = Area;
}

// parallelogram calculation
function calculateParallelogramArea() {
  // parallelogram base
  const parallelogramBaseArea = document.getElementById('parallelogram-base');
  const parallelogramBaseText = parallelogramBaseArea.value;
  const parallelogramBase = parseFloat(parallelogramBaseText);
  // console.log(parallelogramBase);
  // parallelogram height
  const parallelogramHeightArea = document.getElementById(
    'parallelogram-height'
  );
  const parallelogramHeightText = parallelogramHeightArea.value;
  const parallelogramArea = parseFloat(parallelogramHeightText);
  // console.log(parallelogramArea);

  // calculate parallelogram
  const parallelogram = parallelogramBase * parallelogramArea;
  // display area
  const parallelogramAreaSpan = document.getElementById('parallelogram-area');
  parallelogramAreaSpan.innerText = parallelogram;
}
