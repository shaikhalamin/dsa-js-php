<?php


$data = [2, 3, 4, 5, 6, 6, 7, 7, 88, 9, 9];

$filteredArray = array_filter($data, function ($item) {
    if ($item % 2 == 0) {
        return true;
    }
});


// $name = array("best", "interview", "question");
// $index = array("1", "2", "3");
// $result = array_combine($name, $index);


$name = array("best", "interview", "question");
$index = array("1", "2", "3");
$result = array_merge($name, $index);



$duplicateNames = ["shaikh", "alamin", "rebeka", "rita", "shaikh", "rebeka", "rita", "alamin", "rebeka"];


function findDuplicate($names)
{
    $duplicates = [];
    foreach ($names as $key => $name) {
        if (!empty($duplicates[$name])) {
            $duplicates[$name] = $duplicates[$name] + 1;
        } else {
            $duplicates[$name] = 1;
        }
    }

    return $duplicates;
}


$two_sum_data = [2, 5, 9, 34, 6, 12, 21];

function twoSum($data, $target)
{

    for ($i = 0; $i < count($data); $i++) {
        for ($j = $i + 1; $j < count($data); $j++) {
            if ($data[$i] + $data[$j] == $target) {
                return [$i, $j];
            }
        }
    }

    return [-1];
}

$numberData = [1, 1, 2, 2, 4, 4, 6, 6, 7, 7, 9, 9];


function removeDuplicate(&$data)
{
    $len = count($data);
    for ($i = 0; $i < $len; $i++) {
        if (isset($data[$i + 1]) && ($data[$i] == $data[$i + 1])) {
            unset($data[$i]);
        }
    }

    return $data;
}
