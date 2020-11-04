<?php

$input = " dot_taguchi";
$input = trim($input);

// echo strlen($input) . PHP_EOL;
// echo strpos($input, "_") . PHP_EOL;

$input = str_replace("_", "-", $input);
echo $input . PHP_EOL;

$input = " こんにちは " . PHP_EOL;
$input = trim($input);

echo mb_strlen($input) . PHP_EOL;
echo mb_strpos($inout, "に") . PHP_EOL;

$input = str_replace("にち", "ばん", $input);
echo $input . PHP_EOL;

?>