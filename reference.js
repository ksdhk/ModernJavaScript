var person = {
    name : 'Lee'
}

var copy = person;

console.log(copy === person);

copy.name = 'kim';

person.address = 'Seoul';

console.log(person);
console.log(copy);
