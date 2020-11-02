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

$scores = [
  'first'  => 90, 
  'second' => 40, 
  'third'  => 100,
];

foreach ($scores as  $key => $score){
  echo $key . ' - ' . $score . PHP_EOL;
}

?>