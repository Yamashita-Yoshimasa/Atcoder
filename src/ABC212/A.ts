import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const A = +input[0];
const B = +input[1];

if(A > 0 && B > 0){
    console.log('Alloy')
} else if (A > 0 && B == 0) {
    console.log('Gold')
} else {
    console.log('Silver')
}
