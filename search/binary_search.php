<?php


function search(array $nums = [], $target)
{
    $first = 0;
    $last = count($nums) - 1;

    while ($first <= $last) {

        $mid = floor(($first + $last) / 2);

        if ($target == $nums[$mid]) return $mid;

        if ($target > $nums[$mid]) {
            $first = $mid + 1;
        } else {
            $last = $mid - 1;
        }
    }


    return -1;
}

// [-1,0,3,5,9,12]
// 9
// [-1,0,3,5,9,12]
// 2

$nums = [-1, 0, 3, 5, 9, 12];
$target = 9;
print_r(search($nums, $target));


echo "\n";
