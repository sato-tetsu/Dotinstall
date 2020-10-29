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
  case "yellow":
    echo "Caution!" . PHP_EOL;
  case "blue":
    echo "Go!" . PHP_EOL;

?>