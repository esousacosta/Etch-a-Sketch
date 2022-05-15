"use strict"

const aSubmitPadSizeInputButton = document.getElementById("submitPadSizeInput");

function updateSketchPadDimensions ()
{
    const aSketchPadSizeInputField = document.getElementById("padSizeInput");
    const aSketchPadDiv = document.getElementById("sketchPad");
    let aSketchPadSize = 16;

    aSketchPadSize = Number(aSketchPadSizeInputField.value);
    console.log(aSketchPadSize);
    for (let i = 0; i < aSketchPadSize; i++)
    {
        const aNewChildDivElement = document.createElement('div');
        aNewChildDivElement.textContent = i;
        aSketchPadDiv.appendChild(aNewChildDivElement);
    }
}

aSubmitPadSizeInputButton.addEventListener('click', updateSketchPadDimensions);
