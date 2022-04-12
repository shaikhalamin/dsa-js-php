const scores = [32, 53, 3454, 454, 65, 11, 46, 23, 87, 232, 86, 5];

const minMax = scores.reduce(
  (acc, singleItem) => [
    Math.min(acc[0], singleItem),
    Math.max(acc[1], singleItem),
  ],
  [3454, 0]
);

let data = [
  {
    username: 'sheikh',
    name: 'shaikh alamin',
    designation: 'senior engineer',
  },
  {
    username: 'sheikh',
    name: 'shaikh alamin',
    designation: 'senior engineer',
  },
  {
    username: 'rita',
    name: 'rebeka sultana',
    designation: 'house wife',
  },
  {
    username: 'sara',
    name: 'sara binte alamin',
    designation: 'nothing',
  },
  {
    username: 'ripa',
    name: 'sahanaz parveen',
    designation: 'student',
  },
  {
    username: 'ripa',
    name: 'sahanaz parveen',
    designation: 'student',
  },
];

// const data = [];

// const modified_result = data.reduce(function (acc, family) {
//   return { ...acc, [family.username]: family };
// }, {});

// const uniqueRoot = [...new Set(data.map(item => item.username))];

const key = "username";
const unique = [...new Map(data.map((item) => [item[key], item])).values()];

console.log(unique);
