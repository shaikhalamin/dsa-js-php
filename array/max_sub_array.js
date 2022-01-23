function MaxSubArray(arr) {
    //[3, -1, -1, 4, 3, -1]
    //[-2, 1, -3, 4, -1, 2, 1, -5, 4]
    let maxSum = Number.NEGATIVE_INFINITY;
    let formArray = {};
  
    for (let i = 0; i < arr.length; i++) {
      formArray[arr[i]] = [];
      let singleTotal = 0;
      for (let j = i + 1; j <= arr.length; j++) {
        //let singleTotal = 0;
  
        singleTotal += arr[j];
        let subArray = [];
  
        for (let k = i; k < j; k++) {
          //singleTotal += arr[k];
          subArray.push(arr[k]);
        }
        if (singleTotal > maxSum) {
          maxSum = singleTotal;
        }
  
        // console.log("all value", singleTotal, subArray);
        console.log("all value : " + i, subArray);
        formArray[arr[i]].push(subArray);
      }
      //console.log("sub array from single one", formArray);
      //break;
    }
  
    //console.log(formArray);
  
    //console.log("max sum is", maxSum);
  
    return maxSum;
  }
  
  //console.log(MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(MaxSubArray([5,4,-1,7,8]));