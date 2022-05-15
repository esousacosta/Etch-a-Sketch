"use strict"

var SKETCH_PAD_SIZE_IN_PX = 640;

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

/**
 * 
 * @param {object} oMouseoverPadEvent a single pad element hovered over(i.e.: a square)
 */
function paintElementBlack (oMouseoverPadEvent)
{
    console.log("Entrei e pintei");
    oMouseoverPadEvent.target.classList.add("blackPainted");
}

/**
 * 
 * @param {object} oSketchPadElementsList List of all children nodes
 */
function addPaintEffectOnHovering (oSketchPadElementsList)
{
    console.log(oSketchPadElementsList);
    console.log("entrie");
    oSketchPadElementsList.forEach(aSketchPadElement => 
    {
        aSketchPadElement.addEventListener('mouseover', paintElementBlack);
    });
}

function updateSketchPad()
{
    const aSketchPadSizeInputField = document.getElementById("padSizeInput");
    const aSketchPadDiv = document.getElementById("sketchPad");
    let aSketchPadNumOfElementsByRow;
    
    removeAllSketchPadElements();

    aSketchPadNumOfElementsByRow = Number(aSketchPadSizeInputField.value);
    if (aSketchPadNumOfElementsByRow > 100 || aSketchPadNumOfElementsByRow < 10)
    {
        alert("Invalid amount of squares in the pad. Try again!");
    }
    else
    {
        const aTotalNumberOfElements = aSketchPadNumOfElementsByRow ** 2;
        for (let i = 0; i < aTotalNumberOfElements; i++)
        {
            const aNewChildDivElement = document.createElement('div');
            aNewChildDivElement.classList.add('sketchPadElement');
            aSketchPadDiv.appendChild(aNewChildDivElement);
        }
        resizeChildrenDivs(aSketchPadDiv, aSketchPadNumOfElementsByRow);
        addPaintEffectOnHovering(aSketchPadDiv.childNodes);
    }
}

const aSubmitPadSizeInputButton = document.getElementById("submitPadSizeInput");
aSubmitPadSizeInputButton.addEventListener('click', updateSketchPad);