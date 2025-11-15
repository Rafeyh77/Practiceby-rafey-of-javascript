/*
function addition(number1, number2) {
    console.log("Addition is: " + (number1 + number2));
}

addition(7, 8);
addition(typeof ("8", 9));



function add(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = add(10, 15);
console.log("Result is : ", result);


function loggedinuser(username) {
    if (username === undefined) {
        console.log("Please provide username");
        return;
    }

    return `${username} just logged in successfully`;
}

console.log(loggedinuser("Rafey"));





function loggedinuser(username = "guest") {//if no value is given then it will be guest else it will be overwritted to the passed value
    if (username === undefined) {
        console.log("Please provide username");
        return;
    }

    return `${username} just logged in successfully`;
}

console.log(loggedinuser("Rafey"));




function cart(num1, num2, ...num3) {
    return num3;
}

console.log(cart(1, 2, 3, 4, 5, 6, 7, 8, 9));
*/

const myinfo =
{
    name: "Rafey",
    age: 22,
    city: "Lahore",
    country: "Pakistan"
}

function info(anyobject) {
    console.log(`name of the user is ${anyobject.name} and the age is ${anyobject.age} and he lives is ${anyobject.city} and the country is ${anyobject.country}`);

}


info(myinfo);


info({
    name: "Hussain",
    age: 20,
    city: "Karachi",
    country: "Pakistan"
});


const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function valueOfArray(anyarray) {
    console.log("value of that index is: ", anyarray[2]);

}

valueOfArray(myarray);