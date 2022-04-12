const testAsync = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Async OK");
    } else {
      reject("Async Error");
    }
  });
};

// create an iife function to consume the testAsync function
const invokeTestAsync = async () => {
  try {
    const result = await testAsync();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// invokeTestAsync();

// find third hightest and third lowest number in an array
const array = [45, 38, 23, 9, 5, 1, 51];

const findThreeHighestAndLowest = (array) => {
  const highest = Math.max(...array);

  const secondHighest = Math.max(...deleteElement(array, highest));

  const thirdHighest = Math.max(...deleteElement(array, secondHighest));

  const lowest = Math.min(...array);
  const secondLowest = Math.min(...deleteElement(array, lowest));
  const thirdLowest = Math.min(...deleteElement(array, secondLowest));

  return {
    highest: {
      highest,
      secondHighest,
      thirdHighest,
    },
    lowest: {
      lowest,
      secondLowest,
      thirdLowest,
    },
  };
};

function deleteElement(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
  return array;
}

//console.log(findThreeHighestAndLowest(array));

const sortArray = array.sort((a, b) => a - b);
console.log(sortArray[sortArray.length - 3]);

//delete an element from an array
