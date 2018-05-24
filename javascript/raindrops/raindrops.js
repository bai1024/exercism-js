class Raindrops {
  convert(n) {
    let output = '';
    let map = new Map([[3, 'Pling'], [5, 'Plang'], [7, 'Plong']]);
    map.forEach((word, k) => {output += !(n % k) ? word : ''});
    return output || `${n}`;
  }
}

module.exports = Raindrops

//better solution
// convert(n) {
//   let output = '';
//   let map = new Map([[3, 'Pling'], [5, 'Plang'], [7, 'Plong']]);
//   map.forEach((word, k) => {output += !(n % k) ? word : ''});
//   return output || `${n}`;
// }