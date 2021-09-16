import { TIMEOUT } from 'dns';
import { NODATA } from 'dns';
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

function rotateArray2D(matrix: Array<string>[], type: number): Array<string>[] {
  let degree: number = 90;
  let cos90 = 0;
  let sin90 = 1;
  if (type == -1) {
    sin90 = -1;
  }
  let rotateMatrix = matrix;
  //rederMatrix(rotateMatrix);
  let s_c_w = parseFloat(matrix[0].length.toString());
  let s_c_h = parseFloat(matrix.length.toString());
  let d_c_w = parseFloat(rotateMatrix[0].length.toString());
  let d_c_h = parseFloat(rotateMatrix.length.toString());
  s_c_w = (s_c_w - 1.0) / 2.0;
  s_c_h = (s_c_h - 1.0) / 2.0;
  d_c_w = (d_c_w - 1.0) / 2.0;
  d_c_h = (d_c_h - 1.0) / 2.0;
  // console.log(d_c_w, d_c_h);
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      let o_x = x - s_c_w; //中心座標を原点に移動
      let o_y = y - s_c_h;
      let r_x = -1.0 * o_y * sin90;
      let r_y = o_x * sin90;
      //元の位置に移動
      r_x = r_x + d_c_w;
      r_y = r_y + d_c_h;
      o_x = o_x + s_c_w;
      o_y = o_y + s_c_h;
      //console.log(r_x, r_y);
      rotateMatrix[r_y][r_x] = matrix[o_y][o_x];
    }
  }
  return rotateMatrix;
}

const Result = (input: string[]) => {
  const N = +input[0];
  let S: string[] = [];
  let T: string[] = [];
  let TT: string[][] = [];
  let Scount = 0;
  let Tcount = 0;

  const rev = (s: string) => {
    let rv = '';
    for (let i = 0, n = s.length; i < n; i++) {
      rv += s[n - i - 1];
    }
    return rv;
  };

  for (let i = 1; i <= N; i++) {
    S.push(...input[i].split(''));
    T.push(...input[i + N].split(''));
  }

  for (let i = 0; i < N ** 2; i++) {
    if (S[i] == '#') {
      Scount++;
    } else if (T[i] == '#') {
      Tcount++;
    }
  }

  TT = new Array(N);
  for (let i = 0; i < N; i++) {
    TT[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      TT[i][j] = input[i + N + 1].split('')[j];
    }
  }
  // const transpose = (a: string[][]) => a[0].map((_, c) => a.map((r) => r[c]));
  // let rotateT = transpose(TT);
  // let rotateTT = transpose(rotateT);
  // console.log(rotateTT);
  console.log(TT);

  let rotateT = rotateArray2D(TT, 0);
  console.log(rotateT);

  let RT = Array(S.length);
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      RT[count] = rotateT[i][j];
      count++;
    }
  }
  for (let i = 0; i < N ** 2; i++) {
    if (S[i] == '#') {
      Scount++;
    } else if (T[i] == '#') {
      Tcount++;
    }
  }
};
