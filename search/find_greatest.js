
const data = [1,2,3,3,5,5]

const duplicate ={}


for (let i=0;i< data.length;i++){
  if(duplicate[data[i]]){
    duplicate[data[i]] = duplicate[data[i]] + 1
  }else{
    duplicate[data[i]] = 1;
  }
}

const largest = Math.max(...Object.values(duplicate))

const largestDuplicates  = Object.keys(duplicate).filter(key => duplicate[key] === largest).map(key => parseInt(key))

console.log(largestDuplicates)