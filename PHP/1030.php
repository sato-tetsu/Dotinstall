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

// $rate = 1.1;

// function sum($a, $b, $c){
//   // echo $a + $b + $c . PHP_EOL;
//   global $rate;
//   return ($a + $b + $c) * $rate;
//   echo "Here" . PHP_EOL;
// }

// // sum(100, 200, 300);
// // sum(300, 400, 500);

// echo sum(100, 200, 300) + sum(300, 400, 500);


// $sum = function ($a, $b, $c){
//   return $a + $b + $c;
// };

// echo $sum(100, 200, 300) . PHP_EOL;

function sum($a, $b, $c){
  $total = $a + $b + $c;
  if($total < 0){
    return 0;
  }else{
    return $total;
  }
  return $total < 0 ? 0 : $total;
}

echo sum(100, 300, 500) . PHP_EOL;
echo sum(-1000, 300, 500) . PHP_EOL;

?>