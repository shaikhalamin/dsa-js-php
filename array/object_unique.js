const students = [
    {
        name: 'John',
        age: 30,
        education: 'Masters',
        married: true,
    },
    {
        name: 'John',
        age: 30,
        education: 'Masters',
        married: true,
    },
    {
        name: 'Jane',
        age: 30,
        education: 'Masters',
        married: true,
    },
    {
        name: 'Jack',
        age: 30,
        education: 'Masters',
        married: true,
    },
    {
        name: 'Jack',
        age: 30,
        education: 'Masters',
        married: true,
    },
]

const key = "name";
const uniqueNames = [...new Map(students.map((item) => [item[key], item])).values()];

console.log(uniqueNames);



// const uniqueAddresses = Array.from(new Set(students.map(a => a.name)))
//  .map(id => {
//    return addresses.find(a => a.id === id)
//  })

