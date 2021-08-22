import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const S = input[0].substr(0, input[0].length - 1);

if (S == 'Hello,World!') {
  console.log('AC');
} else {
  console.log('WA');
}
