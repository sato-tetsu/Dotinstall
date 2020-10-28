<?php

// echo 'こんにちは' . PHP_EOL;
// echo 'こんばんわ！！' . PHP_EOL;

$name = "Sato";

// echo "Hello World!!" . PHP_EOL;
// echo "Sato" . PHP_EOL;

// echo "Hello World!!" . PHP_EOL;
// echo "Hi" . $name . PHP_EOL;
// echo "Hi $name" . PHP_EOL;

$name = "sato";

// $text = <<<'EOT'
// $text = <<<"EOT"
  $text = <<<EOT
  hello! $name
    this is looooong
  text!

  EOT;

echo $text;


echo 10 + 3 . PHP_EOL;
echo 10 - 3 . PHP_EOL;
echo 10 * 3 . PHP_EOL;
echo 10 / 3 . PHP_EOL;
echo 10 % 3 . PHP_EOL;
echo 10 ** 3 . PHP_EOL;
echo 2 + 10 * 3 . PHP_EOL;
echo (2 + 10) * 3 . PHP_EOL;


define('NAME', 'sato');
const NAME = 'sato';

echo NAME . PHP_EOL;

$score = 70;

if($score >= 80){
  echo "Great!" . PHP_EOL;
}elseif($score >= 60){
  echo "Good!" . PHP_EOL;
}else{
  echo "OK!" . PHP_EOL;
}

?>