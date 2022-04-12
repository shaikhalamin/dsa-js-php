<?php

$summationSeries = [1, 2, 3, 4];

function sum_total($series)
{
    $total = 0;

    for ($i = 0; $i < count($series); $i++) {
        $total += $series[$i];
    }

    return $total;
}

function summation_series($n)
{
    return ($n * ($n + 1)) / 2;
}


function summation_series_recursive($n)
{
    if ($n == 0) {
        return $n;
    }

    return $n + summation_series_recursive($n - 1);
}

function sum_recursive_with_total($n, $total = 0)
{
    if ($n == 0) {
        return $total;
    }

    return sum_recursive_with_total($n - 1, $total + $n);
}


function fibonacci_basic($n)
{
    if ($n == 0) {
        return $n;
    }

    return fibonacci_basic($n - 1) + fibonacci_basic($n - 2);
}

// print_r(summation_series_recursive(5));

//print_r(summation_series_recursive(5));


print_r(sum_recursive_with_total(3, 0));

function fiboIterative($n)
{
    if ($n <= 1) {
        return $n;
    }

    $data = [];

    $data[0] = 0;
    $data[1] = 1;

    for ($i = 2; $i <= $n; $i++) {
        $data[$i] = $data[$i - 2] + $data[$i - 1];
    }

    return $data;
}

// print_r(fiboIterative(10));
