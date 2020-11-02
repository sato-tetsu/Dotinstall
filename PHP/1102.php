<?php

// $score1 = 90;
// $score2 = 40;
// $score3 = 100;

// $scores = [
//   90,
//   40,
//   100,
//   ];

// echo $scores[1] . PHP_EOL;


// $scores = [
//   'first' => 90,
//   'second' => 40,
//   'third' => 100,
// ];

// var_dump($scores);
// print_r($scores);

// echo $scores['third'] . PHP_EOL;

// $scores = [
//   'first'  => 90, 
//   'second' => 40, 
//   'third'  => 100,
// ];

// foreach ($scores as  $key => $score){
//   echo $key . ' - ' . $score . PHP_EOL;
// }

// $moreScope = [
//   55,
//   72,
//   'perfect',
//   [1, 2, 3],
//   ];

// $scores = [
//   90,
//   40,
//   ...$moreScope,
//   100,
// ];

// print_r($scores);


// function sum($a, $b, $c) 
// function sum(... $numbers) 
// {
//   // return $a + $b + $c;
//   $total = 0;
//   foreach($numbers as $number){
//     $total += $number;
//   }
//   return $total;
// }

// echo sum(1,2,3,4) . PHP_EOL;


function getStats(...$numbers)
{
  $total = 0;
  foreach ($numbers as $number) {
    $total += $number;
  }
  return [$total, $total / count($numbers)];
}

// print_r(getStats(1, 3, 5));

list($sum, $average) = getStats(1, 3, 5);

echo $sum . PHP_EOL;
echo $average . PHP_EOL;

?>