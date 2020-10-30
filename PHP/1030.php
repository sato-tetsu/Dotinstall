<?php

function showAd($message = Ad){
  echo "--------" . PHP_EOL;
  echo "-- " . $message . " --" . PHP_EOL;
  echo "--------" . PHP_EOL;
}

showAd("Header Ad");
echo 'Tom is great!' . PHP_EOL;
echo 'Bob is great!' . PHP_EOL;
showAd("Ad");
echo 'Steve is great!' . PHP_EOL;
echo 'Bob is great!' . PHP_EOL;
showAd("Footer Ad");

?>