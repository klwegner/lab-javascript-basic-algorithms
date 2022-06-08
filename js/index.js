let hacker1 = "Kristen";
console.log(`The driver's name is ${hacker1}`);
let hacker2= "Other";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

}

    else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name; it has ${hacker2.length} characters in it.`);
    }

    else {
        console.log(`Wow, you have equallly long names, ${hacker1.length} characters long!`);
    }

    let hackerOneIterable = `${hacker1}`;
    let hackerOneUpper = hackerOneIterable.toUpperCase();
 


    for (const letter of hackerOneUpper) {
      console.log(letter);
    }


let hacker2Reverse = "";
let navName= `${hacker2}`
let length1 = navName.length -1;

   for (let i = length1; i >= 0; i--) {
        console.log(hacker2Reverse +navName[i]);
      }


if (`${hacker1}`.localeCompare(`${hacker2}`) === -1) {
    console.log("The driver's name goes first.");
}

    else if (`${hacker1}`.localeCompare(`${hacker2}`) === 1) {
        console.log("Yo, the navigator goes first definitely.");
    }

    else {
        console.log("What?! You both have the same name?");
}