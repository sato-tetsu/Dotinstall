<?php

// declare(strict_types=1);

// function showInfo(string $name, int $score): void
// {
//   echo $name . ": " . $score . PHP_EOL;
// }

// // showInfo("sato", 40);
// // showInfo("sato", "dot");
// showInfo("sato", "4");

declare(strict_types=1);

function getAward(?int $score): ?string
{
  return $score >= 100 ? "Gold Medal" : null;
}

echo getAward(150) . PHP_EOL;
echo getAward(40) . PHP_EOL;

?>