import { createInterface } from 'readline';

// 入出力
let lines: string[] = [];
const reader = createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', function (line: string) {
  lines.push(line);
});a
reader.on('close', function () {
  Result(lines);
});

const Result = (input:string[]) => {

  const N = BigInt(input[0]);
  let redN = N
  let S:string =''

  while(redN > BigInt(0)){
    if(redN % BigInt(2) == BigInt(0)){
      redN /= BigInt(2)
      S += 'B'
    }else{
      redN -= BigInt(1)
      S += 'A'
    }
  }
  const rev = (s:string) => {
    let rv = '';
    for (let i = 0, n = s.length; i < n; i++) {
      rv += s[n - i - 1];
    }
    return rv;
  }

  console.log(rev(S))
}

