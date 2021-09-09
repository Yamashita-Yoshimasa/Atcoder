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
  const N = +input[0].split(' ')[2];
  let A: number[] = Array(N);
  let B: number[] = Array(N);
  let SortA: number[] = Array(N);
  let SortB: number[] = Array(N);

  const binarySearch = (arr: number[], target: number) => {
    let idx = -1;
    let iMin = 0;
    let iMax = arr.length - 1;
    while (iMin <= iMax) {
      let iMid = Math.floor((iMin + iMax) / 2);
      if (arr[iMid] === target) {
        idx = iMid;
        break;
      } else if (arr[iMid] < target) {
        iMin = iMid + 1;
      } else {
        iMax = iMid - 1;
      }
    }
    return [idx, iMin, iMax];
  };

  // 座標圧縮
  for (let i = 0; i < N; i++) {
    A[i] = +input[i + 1].split(' ')[0];
    B[i] = +input[i + 1].split(' ')[1];
    SortA[i] = +input[i + 1].split(' ')[0];
    SortB[i] = +input[i + 1].split(' ')[1];
  }
  let SA = Array.from(new Set(SortA.sort((a, b) => a - b)));
  let SB = Array.from(new Set(SortB.sort((a, b) => a - b)));
  for (let i = 0; i < N; i++) {
    console.log(
      `${binarySearch(SA, A[i])[0] + 1} ${binarySearch(SB, B[i])[0] + 1}`,
    );
  }
};
