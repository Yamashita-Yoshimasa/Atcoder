import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
let divide: string[] = ['dream', 'dreamer', 'erase', 'eraser'];
const rev = (s: string, toggle: boolean) => {
  let rv = '';
  for (let i = 0, n = s.length; i < n; i++) {
    rv += s[n - i - 1];
  }
  return toggle ? rv.substr(1, rv.length - 1) : rv;
};

const revS = rev(input[0], true);
for (let i = 0; i < 4; i++) {
  divide[i] = rev(divide[i], false);
}

let can: boolean = true;
for (let i = 0; i < revS.length; ) {
  let can2: boolean = false;
  for (let j = 0; j < 4; j++) {
    let d = divide[j];
    if (revS.substr(i, d.length) == d) {
      can2 = true;
      i += d.length;
    }
  }
  if (!can2) {
    can = false;
    break;
  }
}

if (can) {
  console.log('YES');
} else {
  console.log('NO');
}
