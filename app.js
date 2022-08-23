// https://calculator.swiftutors.com/surface-area-of-a-triangular-prism-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const v6 = document.getElementById('v6');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaofTriangularPrismRadio = document.getElementById('surfaceAreaofTriangularPrismRadio');
const trianglebaselengthRadio = document.getElementById('trianglebaselengthRadio');
const triangleheightRadio = document.getElementById('triangleheightRadio');
const prismHeightRadio = document.getElementById('prismHeightRadio');
const side1oftheTriangleRadio = document.getElementById('side1oftheTriangleRadio');
const side2oftheTriangleRadio = document.getElementById('side2oftheTriangleRadio');
const side3oftheTriangleRadio = document.getElementById('side3oftheTriangleRadio');

let surfaceAreaofTriangularPrism;
let trianglebaselength = v1;
let triangleheight = v2;
let prismHeight = v3;
let side1oftheTriangle = v4;
let side2oftheTriangle = v5;
let side3oftheTriangle = v6;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');
const variable6 = document.getElementById('variable6');

surfaceAreaofTriangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Cylinder Diameter (in)';
  variable2.textContent = 'Stroke Length (in)';
  variable3.textContent = 'Head Gasket Thickness (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  trianglebaselength = v1;
  triangleheight = v2;
  prismHeight = v3;
  side1oftheTriangle = v4;
  side2oftheTriangle = v5;
  side3oftheTriangle = v6;
  result.textContent = '';
});

trianglebaselengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Stroke Length (in)';
  variable3.textContent = 'Head Gasket Thickness (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  surfaceAreaofTriangularPrism = v1;
  triangleheight = v2;
  prismHeight = v3;
  side1oftheTriangle = v4;
  side2oftheTriangle = v5;
  side3oftheTriangle = v6;
  result.textContent = '';
});

triangleheightRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Head Gasket Thickness (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  surfaceAreaofTriangularPrism = v1;
  trianglebaselength = v2;
  prismHeight = v3;
  side1oftheTriangle = v4;
  side2oftheTriangle = v5;
  side3oftheTriangle = v6;
  result.textContent = '';
});

prismHeightRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Deck Height (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  surfaceAreaofTriangularPrism = v1;
  trianglebaselength = v2;
  triangleheight = v3;
  side1oftheTriangle = v4;
  side2oftheTriangle = v5;
  side3oftheTriangle = v6;
  result.textContent = '';
});

side1oftheTriangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Head Gasket Thickness (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  surfaceAreaofTriangularPrism = v1;
  trianglebaselength = v2;
  triangleheight = v3;
  prismHeight = v4;
  side2oftheTriangle = v5;
  side3oftheTriangle = v6;
  result.textContent = '';
});

side2oftheTriangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Head Gasket Thickness (in)';
  variable5.textContent = 'Deck Height (in)';
  variable6.textContent = 'Combustion Chamber (cc)';
  surfaceAreaofTriangularPrism = v1;
  trianglebaselength = v2;
  triangleheight = v3;
  prismHeight = v4;
  side1oftheTriangle = v5;
  side3oftheTriangle = v6;
  result.textContent = '';
});

side3oftheTriangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Compression Ratio';
  variable2.textContent = 'Cylinder Diameter (in)';
  variable3.textContent = 'Stroke Length (in)';
  variable4.textContent = 'Head Gasket Thickness (in)';
  variable5.textContent = 'Piston Top Volume (cc)';
  variable6.textContent = 'Combustion Chamber (cc)';
  surfaceAreaofTriangularPrism = v1;
  trianglebaselength = v2;
  triangleheight = v3;
  prismHeight = v4;
  side2oftheTriangle = v5;
  side1oftheTriangle = v6;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaofTriangularPrismRadio.checked)
    result.textContent = `Surface Area of Triangular Prism = ${computeSurfaceAreaofTriangularPrism().toFixed(2)}`;

  else if(trianglebaselengthRadio.checked)
    result.textContent = `(b) Triangle base length = ${computeTrianglebaselength().toFixed(2)}`;

  else if(triangleheightRadio.checked)
    result.textContent = `(h) Triangle height = ${computeTriangleheight().toFixed(2)}`;

  else if(prismHeightRadio.checked)
    result.textContent = `(H) Prism Height = ${computePrismHeight().toFixed(2)}`;

  else if(side1oftheTriangleRadio.checked)
    result.textContent = `(S1) Side 1 of the Triangle = ${computeSide1oftheTriangle().toFixed(2)}`;

  else if(side2oftheTriangleRadio.checked)
    result.textContent = `(S2) Side 2 of the Triangle = ${computeSide2oftheTriangle().toFixed(2)}`;

  else if(side3oftheTriangleRadio.checked)
    result.textContent = `(S3) Side 3 of the Triangle = ${computeSide3oftheTriangle().toFixed(2)}`;
})

// calculation

function computeSurfaceAreaofTriangularPrism() {
  return (Number(trianglebaselength.value) * Number(triangleheight.value)) + (Number(side1oftheTriangle.value) + Number(side2oftheTriangle.value) + Number(side3oftheTriangle.value)) * Number(prismHeight.value);
}

function computeTrianglebaselength() {
  return ((Number(surfaceAreaofTriangularPrism.value) / Number(prismHeight.value)) - (Number(side1oftheTriangle.value) + Number(side2oftheTriangle.value) + Number(side3oftheTriangle.value))) / Number(triangleheight.value);
}

function computeTriangleheight() {
  return ((Number(surfaceAreaofTriangularPrism.value) / Number(prismHeight.value)) - (Number(side1oftheTriangle.value) + Number(side2oftheTriangle.value) + Number(side3oftheTriangle.value))) / Number(trianglebaselength.value);
}

function computeSide1oftheTriangle() {
  return (Number(surfaceAreaofTriangularPrism.value) / (Number(trianglebaselength.value) * Number(triangleheight.value) * Number(prismHeight.value))) - Number(side2oftheTriangle.value) - Number(side3oftheTriangle.value);
}

function computeSide2oftheTriangle() {
  return (Number(surfaceAreaofTriangularPrism.value) / (Number(trianglebaselength.value) * Number(triangleheight.value) * Number(prismHeight.value))) - Number(side1oftheTriangle.value) - Number(side3oftheTriangle.value);
}

function computeSide3oftheTriangle() {
  return (Number(surfaceAreaofTriangularPrism.value) / (Number(trianglebaselength.value) * Number(triangleheight.value) * Number(prismHeight.value))) - Number(side1oftheTriangle.value) - Number(side2oftheTriangle.value);
}

function computePrismHeight() {
  return Number(surfaceAreaofTriangularPrism.value) / ((Number(trianglebaselength.value) * Number(triangleheight.value)) + (Number(side1oftheTriangle.value) + Number(side2oftheTriangle.value) + Number(side3oftheTriangle.value)));
}