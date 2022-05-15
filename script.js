"use strict"

var SKETCH_PAD_SIZE_IN_PX = 640;
const aSubmitPadSizeInputButton = document.getElementById("submitPadSizeInput");

function removeAllSketchPadElements ()
{
    const aSketchPadDiv = document.getElementById("sketchPad");
    while (aSketchPadDiv.firstChild)
    {
        aSketchPadDiv.removeChild(aSketchPadDiv.firstChild);
    }
}

/**
 * 
 * @param {Object} ioSketchPadDiv the main div container
 */
function resizeChildrenDivs (ioSketchPadDiv, iSketchPadNumOfElementsByRow)
{
    const aChildrenDivList = ioSketchPadDiv.childNodes;
    aChildrenDivList.forEach(aChildDiv => {
        aChildDiv.style.width = Math.floor(SKETCH_PAD_SIZE_IN_PX / iSketchPadNumOfElementsByRow) + 'px';
        aChildDiv.style.height = Math.floor(SKETCH_PAD_SIZE_IN_PX / iSketchPadNumOfElementsByRow) + 'px';
    });
}

function updateSketchPadDimensions ()
{
    const aSketchPadSizeInputField = document.getElementById("padSizeInput");
    const aSketchPadDiv = document.getElementById("sketchPad");
    let aSketchPadNumOfElementsByRow = 16;
    
    removeAllSketchPadElements();

    aSketchPadNumOfElementsByRow = Number(aSketchPadSizeInputField.value);
    const aTotalNumberOfElements = aSketchPadNumOfElementsByRow ** 2;
    for (let i = 0; i < aTotalNumberOfElements; i++)
    {
        const aNewChildDivElement = document.createElement('div');
        aNewChildDivElement.classList.add('sketchPadElement');
        aSketchPadDiv.appendChild(aNewChildDivElement);
    }
    resizeChildrenDivs(aSketchPadDiv, aSketchPadNumOfElementsByRow);
}

aSubmitPadSizeInputButton.addEventListener('click', updateSketchPadDimensions);
