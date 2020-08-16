let inputLabel = document.querySelector("#inputLabel");
let outputLabel = document.querySelector("#outputLabel");

function clickedBtn(obj) {
    let clicked = obj.innerHTML;
    let value = 0;

    if ((inputLabel.innerHTML).length > 24) {
        inputLabel.innerHTML = "Can't Take More";
    } else if ((outputLabel.innerHTML).length > 24) {
        outputLabel.innerHTML = "More Than Range";
    } else {
        if (clicked == "=") {
            outputLabel.innerHTML = eval(inputLabel.innerHTML);
            inputLabel.innerHTML = "0";
        } else if (clicked == "AC") {
            inputLabel.innerHTML = "0";
        } else if (clicked == "MC") {
            inputLabel.innerHTML = "0";
            outputLabel.innerHTML = "0";
        } else if (clicked == "M+") {
            outputLabel.innerHTML = eval(outputLabel.innerHTML) + eval(inputLabel.innerHTML);
            inputLabel.innerHTML = "0";
        } else {
            if (inputLabel.innerHTML == "0") {
                inputLabel.innerHTML = clicked;
                outputLabel.innerHTML = clicked;
            } else {
                inputLabel.innerHTML += clicked;
                outputLabel.innerHTML = eval(inputLabel.innerHTML);
            }
        }
    }
}