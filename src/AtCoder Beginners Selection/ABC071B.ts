import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');

const S = Array.from(new Set(Array.from(input).sort()));
if (S.length == 27) {
  console.log('None');
} else {
  for (let i = 1; i <= S.length - 1; i++) {
    let Acode = S[i].charCodeAt(0);
    if (Acode != 96 + i) {
      console.log(String.fromCharCode(96 + i));
      break;
    } else if (i == 25 && Acode == 121) {
      console.log('z');
    }
  }
}
