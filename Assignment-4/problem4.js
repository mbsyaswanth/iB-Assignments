let voterEligibility = (list) => {
    return list.filter((person) => person.age > 18)
}

let personList = [{fullName: 'Sita', age: 16}, {fullName: 'Ram', age: 19}, {fullName: 'Lakshman', age: 15}];

console.log(voterEligibility(personList));