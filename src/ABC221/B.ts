import { createInterface } from 'readline';

// 入出力
let lines: string[] = [];
const reader = createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', function (line: string) {
  lines.push(line);
});
reader.on('close', function () {
  Result(lines);
});

const Result = (input: string[]) => {
  const S = input[0];
  const T = input[1];
  const SArray = input[0].split('');
  const TArray = input[1].split('');
  let SCopy = SArray.concat();
  let str = '';

  if (S == T) {
    console.log('Yes');
  } else {
    for (let i = 0; i < S.length; i++) {
      if (SArray[i] != TArray[i]) {
        SCopy[i - 1] = SArray[i];
        SCopy[i] = SArray[i - 1];
        str = SCopy.join('');
        if (str == T) {
          console.log('Yes');
          break;
        } else {
          SCopy = SArray.concat();
          SCopy[i + 1] = SArray[i];
          SCopy[i] = SArray[i + 1];
          str = SCopy.join('');
          if (str == T) {
            console.log('Yes');
            break;
          } else {
            console.log('No');
            break;
          }
        }
      }
    }
  }
};
