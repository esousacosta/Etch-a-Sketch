"use strict"

const aSubmitPadSizeInputButton = document.getElementById("submitPadSizeInput");

function removeAllSketchPadElements ()
{
    const aSketchPadDiv = document.getElementById("sketchPad");
    while (aSketchPadDiv.firstChild)
    {
        aSketchPadDiv.removeChild(aSketchPadDiv.firstChild);
    }
}

function updateSketchPadDimensions ()
{
    const aSketchPadSizeInputField = document.getElementById("padSizeInput");
    const aSketchPadDiv = document.getElementById("sketchPad");
    let aSketchPadSize = 16;
    
    removeAllSketchPadElements();

    aSketchPadSize = Number(aSketchPadSizeInputField.value);
    for (let i = 0; i < aSketchPadSize; i++)
    {
        const aNewChildDivElement = document.createElement('div');
        aNewChildDivElement.textContent = i;
        aSketchPadDiv.appendChild(aNewChildDivElement);
    }
}

aSubmitPadSizeInputButton.addEventListener('click', updateSketchPadDimensions);
