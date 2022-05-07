let userName = prompt(("Please enter you name: "));
let greating = "welcome to our js community!";

// simple task solving
// console.log(`${userName}, ${greating}`);

//my extension))
if (userName){
    console.log(`${userName}, ${greating}`);
} else{
    let message = confirm(("You didn't enter your name. Do you want to try entering your name again?"));
    if (message){
        userName = prompt(("Ok, please enter you name again: "));
        if (userName){
            console.log(`${userName}, ${greating}`);
        } else {
            alert("Ok, have a nice day!")
        }
    } else {
        alert("Ok, have a nice day!")
    };
}