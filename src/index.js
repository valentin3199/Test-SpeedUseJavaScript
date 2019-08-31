//Create world champion objects
var wchMale = {
    name: 'Usain Bolt',
    time: 9.58
};
var wchFemale = {
    name: 'Florence griffith',
    time: 10.49
};

//Create the client object
var client = {};

//Get gender from the client
client.gender = prompt('Please enter your gender: male or female');
client.gender = client.gender.toLowerCase();
console.log(client.gender);

//Get the time from the client
client.time = prompt('Please enter your race time:');
client.time = parseFloat(client.time);
console.log(client.time);

//  If Statement
if(client.gender === 'male' && !isNaN(client.time)){
    if(client.time > wchMale.time){
        console.log('Congratulations! You have beaten' + wchMale.name + ',you have set a new world record:' + client.time + 'seconds!');
    }else{
        console.log('Sorry! You need to train harder!')
    }
}else if(client.gender === 'female' && !isNaN(client.time)){
    if(client.time > wchFamele.time){
        console.log('Congratulations! You have beaten' + wchFemale + ',you have set a new world record:' + client.time + 'seconds!');
    }else{
        console.log('Sorry! You need to train harder!')
    }
}else{
    console.log('Please reload the page and use a correct gender and a correct time!')
}