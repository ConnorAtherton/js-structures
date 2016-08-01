#!/usr/bin/env node

//
// Print out the grade-school multiplication table up to 12x12
//
const max = process.argv[2]

for (let i = 1; i <= max; i++) {
  for (let j = 1; j <= max; j++) {
    process.stdout.write(`${i * j} `)
  }

  process.stdout.write('\n')
}
