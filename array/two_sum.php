<?php


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum($nums = [], $target)
{
    if (count($nums) < 0) {
        return;
    }

    for ($i = 0; $i < count($nums); $i++) {
        for ($j = $i + 1; $j < count($nums); $j++) {
            $newTarget = $nums[$i] + $nums[$j];
            if ($target == $newTarget) {
                return [$i, $j];
            }
        }
    }

    return [];
}

print_r(twoSum([2, 3, 4], 7));
