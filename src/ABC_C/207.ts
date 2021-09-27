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
  const N = Number(input[0]);
  let ti = 0;
  let tj = 0;
  let li = 0;
  let ri = 0;
  let lj = 0;
  let rj = 0;
  let ans = 0;
  // 開区間を閉区間に変換し計算
  for (let i = 0; i < N; i++) {
    ti = +input[i + 1].split(' ')[0];
    li = +input[i + 1].split(' ')[1];
    ri = +input[i + 1].split(' ')[2];
    if (ti == 1) {
      li = li;
      ri = ri;
    } else if (ti == 2) {
      li = li;
      ri = ri - 0.5;
    } else if (ti == 3) {
      li = li + 0.5;
      ri = ri;
    } else if (ti == 4) {
      li = li + 0.5;
      ri = ri - 0.5;
    }
    for (let j = i + 1; j < N; j++) {
      tj = +input[j + 1].split(' ')[0];
      lj = +input[j + 1].split(' ')[1];
      rj = +input[j + 1].split(' ')[2];
      if (tj == 1) {
        lj = lj;
        rj = rj;
      } else if (tj == 2) {
        lj = lj;
        rj = rj - 0.5;
      } else if (tj == 3) {
        lj = lj + 0.5;
        rj = rj;
      } else if (tj == 4) {
        lj = lj + 0.5;
        rj = rj - 0.5;
      }
      if (Math.max(li, lj) <= Math.min(ri, rj)) {
        ans++;
      }
    }
  }
  console.log(ans);
};
