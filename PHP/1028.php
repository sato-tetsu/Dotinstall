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

?>