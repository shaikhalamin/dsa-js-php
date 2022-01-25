<?php


$arrayData = [1, 2, 3];
$strData = "1,2,3";

var_dump($arrayData == $strData);

function insertionSort(&$data)
{

    for ($i = 1; $i < count($data); $i++) {
        $key = $data[$i];
        $j = $i - 1;
        echo "initially value to check : -->" . $key . "--> starting index : --> : " . $j . "\n";

        while ($j >= 0 &&  $data[$j] > $key) {
            echo "Swapping value of : -->  " . $data[$j] . " --with : " . $data[$j + 1] . "\n";

            $data[$j + 1] = $data[$j];

            $j--;
        }

        $data[$j + 1] = $key;

        echo "after swapping : " . implode(",", $data) . "\n";

        // if ($i == 3) {
        //     break;
        // }
    }

    return $data;
}


$data = [21, 12, 34, 11, 2, 44, 23, 7, 6];

//print_r(insertionSort($data));
