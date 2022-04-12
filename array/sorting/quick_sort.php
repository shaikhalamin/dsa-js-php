<?php

$data = [32, 17, 7, 42, 15];

// create a function to quick sort the array
function quickSort(&$data)
{
    if (count($data) < 2) {
        return $data;
    }

    $pivot = $data[0];
    $left = [];
    $right = [];

    for ($i = 1; $i < count($data); $i++) {

        // implement the pivot
        if ($data[$i] < $pivot) {
            $left[] = $data[$i];
        } else {
            $right[] = $data[$i];
        }
    }

    print_r(["left" => $left]);
    print_r(["right" => $right]);
    $res = array_merge(quickSort($left), [$pivot], quickSort($right));
    echo "\n";
    print_r(["merged" => $res]);

    return $res;
}

print_r(quickSort($data));
