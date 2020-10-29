<?php

$signal = 'blue';

// if ($signal === 'red') {
//   echo 'Stop!' . PHP_EOL;
// } elseif ($signal === 'yellow') {
//   echo 'Caution!' . PHP_EOL;
// } elseif ($signal === 'blue'){
//   echo 'Go!' . PHP_EOL;
// }

switch($signal){
  case "red":
    echo "Stop!" . PHP_EOL;
    break;
  case "yellow":
    echo "Caution!" . PHP_EOL;
    break;
  case "blue":
    echo "Go!" . PHP_EOL;
    break;
  default:
    echo "Wrong" . PHP_EOL;
    break;

for($i = 1; $i <= 5; $i++){
  // echo "Hello". PHP_EOL;
  echo "$i - Hello" . PHP_EOL;
}

$hp = 100;

// while($hp > 0){
//   echo "Your HP: $hp" . PHP_EOL;
//   $hp -= 15;
// }

do {
  echo "Your HP: $hp" . PHP_EOL;
  $hp -= 15;
}while($hp > 0);

?>