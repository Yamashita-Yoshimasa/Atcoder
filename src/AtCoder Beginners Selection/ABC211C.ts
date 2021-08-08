import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('');
const len = input.length - 1;
let str: string[] = Array(len);
let count = 0;
let result: number;

for (let i = 0; i < len; i++) {
  str[0] = input[i];
  if (str[0] != 'c') {
    continue;
  }
  for (let j = i + 1; j < len; j++) {
    str[1] = input[j];
    if (str[1] != 'h') {
      continue;
    }
    for (let q = j + 1; q < len; q++) {
      str[2] = input[q];
      if (str[2] != 'o') {
        continue;
      }
      for (let w = q + 1; w < len; w++) {
        str[3] = input[w];
        if (str[3] != 'k') {
          continue;
        }
        for (let r = w + 1; r < len; r++) {
          str[4] = input[r];
          if (str[4] != 'u') {
            continue;
          }
          for (let t = r + 1; t < len; t++) {
            str[5] = input[t];
            if (str[5] != 'd') {
              continue;
            }
            for (let y = t + 1; y < len; y++) {
              str[6] = input[y];
              if (str[6] != 'a') {
                continue;
              }
              for (let u = y + 1; u < len; u++) {
                str[7] = input[u];
                if (str[7] != 'i') {
                  continue;
                }
                if (
                  str[0] +
                    str[1] +
                    str[2] +
                    str[3] +
                    str[4] +
                    str[5] +
                    str[6] +
                    str[7] ==
                  'chokudai'
                ) {
                  count++;
                }
              }
            }
          }
        }
      }
    }
  }
}

result = count % (10 ** 9 + 7);

console.log(result);
