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

// rhombus calculation

function calculateRhombusArea() {
  const rhombusBase = getInputValueById('rhombus-base');
  // console.log(rhombusBase);
  const rhombusHeight = getInputValueById('rhombus-height');
  // console.log(rhombusHeight);
  const rhombusArea = 0.5 * rhombusBase * rhombusHeight;
  console.log(rhombusArea);

  setInnerTextById('rhombus-Area', rhombusArea);
}
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputvalue = parseFloat(inputValueText);
  return inputvalue;
}
function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
// pentagone area
function calculatePentagoneArea() {
  const pentagonPerameter = getPentagoneInputValue('pentagon-peremeter');
  const pentagonArothem = getPentagoneInputValue('pentagon-arothem');
  const pentagonArea = (5 / 2) * pentagonPerameter * pentagonArothem;
  // console.log(pentagonArea);
  setPentagoneInnerId('pentagon-area', pentagonArea);
}
function getPentagoneInputValue(pentagoneId) {
  const pentagoneById = document.getElementById(pentagoneId);
  const pentagoneInputValue = pentagoneById.value;
  const pentagoneValue = parseFloat(pentagoneInputValue);
  return pentagoneValue;
}
function setPentagoneInnerId(pentagoneIdByValue, pantagone) {
  const pentagoneIdByinput = document.getElementById(pentagoneIdByValue);
  pentagoneIdByinput.innerText = pantagone;
}

function calculateRhombusArea() {
  const ellipseparameter = getInputValueById('ellipse-peremeter');
  const ellipseArothem = getInputValueById('ellipse-arothem');
  const ellipseArea = 3.1416 * ellipseparameter * ellipseArothem;
  setInnerTextById('ellipse-area', ellipseArea);
}
