const data = [
  {
    id: 1,
    name: "John",
    age: 30,
    education: "Masters",
    married: true,
    hobbies: ["sports", "cooking", "reading"],
    gradepoints: {
      classOne: {
        subjectOne: 100,
      },
      classTwo: 80,
      classThree: 70,
      classFour: 60,
      classFive: 50,
    },
    address: {
      city: "New York",
      state: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
    education: "Masters",
    married: true,
    hobbies: ["sports", "cooking", "reading"],
    address: {
      city: "New York",
      state: "New York",
      country: "USA",
      mobile: "1234567890",
    },
  },
  {
    id: 3,
    name: "Jack",
    age: 30,
    education: "Masters",
    married: true,
    hobbies: ["sports", "cooking", "reading"],
    address: {
      city: "Dallas",
      state: "Texas",
      country: "USA",
    },
  },
];

const generateNameMobile = (data, id) => {
  const findJane = data.find((item) => item.id === id);
  if (findJane) {
    if (findJane.address !== undefined) {
      if (findJane.address.mobile !== undefined) {
        return findJane.address.mobile;
      }
    }
  }

  return "Not found";
  //   return findJane?.address?.mobile
  //     ? `${findJane.name} ${findJane.address?.mobile}`
  //     : "not found";
};

console.log(generateNameMobile(data, 3));
