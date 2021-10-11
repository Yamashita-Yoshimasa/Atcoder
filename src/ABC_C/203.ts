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
  const N = BigInt(input[0].split(' ')[0]);
  const K = BigInt(input[0].split(' ')[1]);
  let A:BigInt[] = Array(N);
  let B = new Map();
  let wallet = K



  for(let i = 0; i< N; i++){
    A[i] = BigInt(input[i+1].split(' ')[0])
    B.set(A[i],BigInt(input[i+1].split(' ')[1]))
    }

    A.sort();

    for(let i = 0; i < N; i++){
      if(wallet >= A[i] ) {
        wallet += B.get(A[i]);
      }else {
        break;
      }
    }
    console.log(String(wallet))
  }


