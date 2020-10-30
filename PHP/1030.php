<?php

// function showAd($message = Ad){
//   echo "--------" . PHP_EOL;
//   echo "-- " . $message . " --" . PHP_EOL;
//   echo "--------" . PHP_EOL;
// }

// showAd("Header Ad");
// echo 'Tom is great!' . PHP_EOL;
// echo 'Bob is great!' . PHP_EOL;
// showAd("Ad");
// echo 'Steve is great!' . PHP_EOL;
// echo 'Bob is great!' . PHP_EOL;
// showAd("Footer Ad");

$rate = 1.1;

function sum($a, $b, $c){
  // echo $a + $b + $c . PHP_EOL;
  global $rate;
  return ($a + $b + $c) * $rate;
  echo "Here" . PHP_EOL;
}

// sum(100, 200, 300);
// sum(300, 400, 500);

echo sum(100, 200, 300) + sum(300, 400, 500);

?>