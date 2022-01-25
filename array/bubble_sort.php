<?php

$data = [2, 34, 1, 45, 23, 11];

$arraySize = count($data);


function bubbleSort(&$data, $n)
{
    for ($i = 0; $i < $n; $i++) {
        $number =  ($n - $i) - 1;
        for ($j = 0; $j < $number; $j++) {

            if ($data[$j] > $data[$j + 1]) {
                echo "before swap " . "-->" . $data[$j] . "-->" . $data[$j + 1] . "\n";
                $temp = $data[$j];
                $data[$j] = $data[$j + 1];
                $data[$j + 1] = $temp;

                echo "after swap " . "-->" . $data[$j] . "-->" . $data[$j + 1] . "\n";
            }
        }
    }

    return $data;
}

print_r(bubbleSort($data, $arraySize));
