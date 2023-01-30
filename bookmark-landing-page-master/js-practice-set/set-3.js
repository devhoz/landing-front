// Print Marks of studentin class 

let Marks={
    hozaifa:35,
    aqib:35,
    zishan:40,
    pasha:21,
    nafees:32,
    salman:36,
    shahbaz:35,
}

for(let i=0; i<Object.keys(Marks).length; i++){

    console.log("The Marks of " + Object.keys(Marks)[i] + " are " + Marks[Object.keys(Marks)[i]])

}

let age=prompt("What's your age?");
age=Number.parseInt(age);

const canDrive = (age) =>{
    return age>=18?true:false
}

if(canDrive(age)){
    alert("Congratulations, you're eligible to vote!")
}

else {
    alert("You cannot vote,as you're not 18 year old!")

}