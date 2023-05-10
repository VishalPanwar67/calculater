let string = "";

let buttons = document.querySelectorAll(".button");
// console.log(buttons);

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target);
    //string += e.target.innerHTML; //string = string + e.target.innerHTML
    //document.querySelector("input").value = string; //put value of button at input
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }

    // For clear input
    else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    }
    // For remove last intered no.
    else if (e.target.innerHTML == "CE") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    }
    // For nagative to positive or vise -versa
    else if (e.target.innerHTML == "+/-") {
      string = -string;
      document.querySelector("input").value = string;
    }
    // For squre of no.
    else if (e.target.innerHTML == "sqr") {
      string = string * string;
      document.querySelector("input").value = string;
    }
    // For printing numbers button  in input
    else {
      string += e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

// For stoping input value
document.getElementById("input").disabled = true;
