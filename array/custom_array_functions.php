<?php

$data = [55, 42, 35, 26, 21, 15, 10, 5, 2, 1];

function findThirdLargest(&$data)
{
    $firstHigh = max($data);

    $secondHigh = max(deleteItem($data, $firstHigh));

    $thirdHighest = max(deleteItem($data, $secondHigh));

    return [$firstHigh, $secondHigh, $thirdHighest];
}


function deleteItem(&$data, $item)
{
    $index = array_search($item, $data);
    unset($data[$index]);
    return $data;
}


print_r(findThirdLargest($data));
