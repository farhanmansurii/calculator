let string = "";
const buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
    }
    else if (e.target.innerHTML == "clear"){
        string= ''
    }
    else{ 
        console.log(e.target)
        string = string + e.target.innerHTML;
        
    }
    document.querySelector('input').value = string;
  });
});
