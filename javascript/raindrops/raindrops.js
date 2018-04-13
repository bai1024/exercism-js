class Raindrops {
  constructor() {}
  convert(num){
    let factors = Array
      .from(Array(num), (_, i) => i)
      .filter(i => num % i === 0)
    factors.push(num)
    
    const result = factors.filter(i =>{
      return i === 3 || i === 5 || i === 7
    })
    
    let str = ''
    
    for(var i = 0; i < result.length;i++){
      if(result[i] === 3){
        str += 'Pling'
      } else if(result[i] === 5){
        str += 'Plang'
      } else if (result[i] === 7){
        str += 'Plong'
      }
    }
    
    return result.length === 0 ? num.toString() : str
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